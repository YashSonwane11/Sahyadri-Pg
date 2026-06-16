# deploy.ps1
# Automates git commit and push with retries and status logging

$ErrorActionPreference = "Stop"

# Log helper
function Write-Log($message) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Output "[$timestamp] $message"
}

try {
    Write-Log "Starting deployment script..."

    # Save active branch name
    $branch = (git branch --show-current).Trim()
    Write-Log "Active branch detected: $branch"

    # Get remote repository URL
    $repoUrl = (git config --get remote.origin.url).Trim()
    Write-Log "Remote Repository: $repoUrl"

    # Check git status
    Write-Log "Running git status..."
    $status = git status --porcelain
    if ([string]::IsNullOrEmpty($status)) {
        Write-Log "No changes to commit. Exiting deployment."
        exit 0
    }

    # Stage changes
    Write-Log "Staging all changes..."
    git add .

    # Commit changes
    $commitMessage = "Sahyadri PG content and UI refinements"
    Write-Log "Committing changes with message: '$commitMessage'..."
    git commit -m $commitMessage

    # Get commit hash
    $commitHash = (git rev-parse HEAD).Trim()
    Write-Log "Commit successful. Hash: $commitHash"

    # Push to active branch with retries
    $maxRetries = 3
    $attempt = 1
    $pushSuccess = $false

    while ($attempt -le $maxRetries) {
        Write-Log "Push attempt $attempt of $maxRetries to remote branch '$branch'..."
        try {
            git push origin $branch
            $pushSuccess = $true
            Write-Log "Push successful!"
            break
        } catch {
            Write-Log "WARNING: Push attempt $attempt failed."
            Write-Log "Error details: $_"
            if ($attempt -lt $maxRetries) {
                Write-Log "Waiting 10 seconds before retrying..."
                Start-Sleep -Seconds 10
            }
            $attempt++
        }
    }

    if (-not $pushSuccess) {
        Write-Log "ERROR: All $maxRetries push attempts failed. Deployment aborted."
        exit 1
    }

    # Generate deployment summary
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss K"
    $summary = @"
# Deployment Summary

- **Status**: SUCCESS
- **Commit Hash**: $commitHash
- **Branch Name**: $branch
- **Repository URL**: $repoUrl
- **Push Timestamp**: $timestamp
"@
    
    # Save summary to file
    $summaryFile = Join-Path $PSScriptRoot "deployment_summary.md"
    $summary | Out-File -FilePath $summaryFile -Encoding utf8
    Write-Log "Deployment summary saved to $summaryFile"
    Write-Output $summary

} catch {
    Write-Log "FATAL ERROR: $_"
    exit 1
}
