# Script para configurar SSH Agent automáticamente
# Ejecutar como Administrador

Write-Host "Configurando SSH Agent para GitHub..." -ForegroundColor Green

# Verificar si el servicio SSH Agent existe
$sshAgentService = Get-Service -Name "ssh-agent" -ErrorAction SilentlyContinue

if ($sshAgentService) {
    Write-Host "Iniciando servicio SSH Agent..." -ForegroundColor Yellow
    
    # Iniciar el servicio
    Start-Service -Name "ssh-agent" -ErrorAction SilentlyContinue
    
    # Configurar para que inicie automáticamente
    Set-Service -Name "ssh-agent" -StartupType Automatic -ErrorAction SilentlyContinue
    
    Write-Host "SSH Agent configurado correctamente" -ForegroundColor Green
} else {
    Write-Host "SSH Agent no está instalado. Instalando OpenSSH..." -ForegroundColor Red
    
    # Instalar OpenSSH Client (requiere Windows 10 1809+)
    try {
        Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
        Write-Host "OpenSSH instalado. Reinicia PowerShell y ejecuta este script nuevamente." -ForegroundColor Yellow
    } catch {
        Write-Host "Error instalando OpenSSH. Instala manualmente desde: https://github.com/PowerShell/Win32-OpenSSH" -ForegroundColor Red
    }
}

# Verificar si existe la llave SSH
$sshKeyPath = "$env:USERPROFILE\.ssh\id_ed25519"
if (Test-Path $sshKeyPath) {
    Write-Host "Llave SSH encontrada: $sshKeyPath" -ForegroundColor Green
    
    # Agregar la llave al agente
    try {
        ssh-add $sshKeyPath
        Write-Host "Llave SSH agregada al agente" -ForegroundColor Green
    } catch {
        Write-Host "Error agregando la llave SSH. Ejecuta manualmente: ssh-add $sshKeyPath" -ForegroundColor Yellow
    }
} else {
    Write-Host "No se encontró llave SSH en: $sshKeyPath" -ForegroundColor Yellow
    Write-Host "Genera una nueva llave con: ssh-keygen -t ed25519 -C 'tu-email@ejemplo.com'" -ForegroundColor Yellow
}

# Verificar conexión con GitHub
Write-Host "Verificando conexión con GitHub..." -ForegroundColor Yellow
try {
    $githubTest = ssh -T git@github.com 2>&1
    if ($githubTest -match "successfully authenticated") {
        Write-Host "Conexión SSH con GitHub exitosa" -ForegroundColor Green
    } else {
        Write-Host "Conexión SSH con GitHub falló" -ForegroundColor Red
    }
} catch {
    Write-Host "No se pudo verificar la conexión con GitHub" -ForegroundColor Red
}

Write-Host ""
Write-Host "Configuración completada. Para futuros repositorios usa:" -ForegroundColor Cyan
Write-Host "git clone git@github.com:usuario/repo.git" -ForegroundColor White
Write-Host "git remote set-url origin git@github.com:usuario/repo.git" -ForegroundColor White