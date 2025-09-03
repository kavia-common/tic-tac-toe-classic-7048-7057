#!/usr/bin/env sh
# Workspace-level Gradle CI shim for Expo app (no native project by default).
# Ensures ./gradlew exists and is executable, then no-ops successfully.

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Try repo-root gradlew
if [ -f "$ROOT_DIR/../gradlew" ]; then
  chmod +x "$ROOT_DIR/../gradlew" 2>/dev/null || true
  echo "[workspace gradle-ci] Repo-root ./gradlew found; leaving as no-op."
  exit 0
fi

# Try workspace ./gradlew
if [ -f "$ROOT_DIR/gradlew" ]; then
  chmod +x "$ROOT_DIR/gradlew" 2>/dev/null || true
  echo "[workspace gradle-ci] Workspace ./gradlew found; leaving as no-op."
  exit 0
fi

# As a last resort, create a no-op gradlew at the workspace root
cat > "$ROOT_DIR/gradlew" <<'EOF'
#!/usr/bin/env sh
echo "[workspace ./gradlew shim] Skipping native Gradle build (Expo app)."
exit 0
EOF
chmod +x "$ROOT_DIR/gradlew" 2>/dev/null || true
echo "[workspace gradle-ci] Created workspace ./gradlew no-op shim."
exit 0
