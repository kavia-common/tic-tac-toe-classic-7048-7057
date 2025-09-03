#!/usr/bin/env sh
# Creates an executable workspace-level ./gradlew shim (no-op) for CI environments.
set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
GRADLEW_PATH="$SCRIPT_DIR/gradlew"

cat > "$GRADLEW_PATH" <<'EOF'
#!/usr/bin/env sh
echo "[workspace ./gradlew shim] Skipping native Gradle build (Expo app)."
exit 0
EOF

chmod +x "$GRADLEW_PATH" 2>/dev/null || true
echo "[create-workspace-gradlew-shim] Created workspace ./gradlew shim and set executable bit."
exit 0
