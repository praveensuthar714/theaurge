$folders = @(
    "public/ai-automation",
    "public/ai-marketing",
    "public/branding",
    "public/business-consulting",
    "public/inbound-messaging",
    "public/performance-marketing",
    "public/video-production",
    "public/website-development",
    "public/images",
    "public/capabilities"
)

foreach ($folder in $folders) {
    if (Test-Path $folder) {
        Write-Host "Processing $folder..."
        $files = Get-ChildItem -Path $folder -File
        $groups = $files | Get-FileHash -Algorithm MD5 | Group-Object Hash
        
        foreach ($group in $groups) {
            if ($group.Count -gt 1) {
                Write-Host "Found $($group.Count) duplicates for hash $($group.Name)"
                
                # Sort by length descending to keep the largest one
                $sorted = $group.Group | foreach { Get-Item $_.Path } | Sort-Object Length -Descending
                $keep = $sorted[0]
                $toDelete = $sorted | Select-Object -Skip 1
                
                Write-Host "Keeping: $($keep.Name) ($($keep.Length) bytes)"
                foreach ($file in $toDelete) {
                    Write-Host "Deleting: $($file.Name) ($($file.Length) bytes)"
                    Remove-Item -Path $file.FullName -Force
                }
            }
        }
    }
}
Write-Host "Sanitization Complete."
