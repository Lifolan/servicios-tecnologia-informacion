# Script rápido para iniciar SSH Agent y agregar llaves
# Para ejecutar cuando necesites usar SSH

Write-Host "Iniciando SSH Agent..." -ForegroundColor Green

# Iniciar servicio SSH Agent
Start-Service -Name "ssh-agent" -ErrorAction SilentlyContinue

# Agregar llave SSH si existe
$sshKeyPath = "$env:USERPROFILE\.ssh\id_ed25519"
if (Test-Path $sshKeyPath) {
    ssh-add $sshKeyPath
    Write-Host "✓ Llave SSH agregada" -ForegroundColor Green
} else {
    Write-Host "⚠ No se encontró llave SSH en: $sshKeyPath" -ForegroundColor Yellow
}

# Verificar conexión con GitHub
Write-Host "Verificando GitHub..." -ForegroundColor Yellow
ssh -T git@github.com

Write-Host "SSH Agent listo para usar" -ForegroundColor Green
