#!/usr/bin/env node
/**
 * Prepare a repo-root ./gradlew shim after npm install in the app workspace.
 * This helps CI environments that later invoke './gradlew' at the repo root.
 */
const fs = require('fs');
const path = require('path');

try {
  const repoRoot = path.resolve(__dirname, '../../..');
  const gradlewPath = path.join(repoRoot, 'gradlew');

  if (!fs.existsSync(gradlewPath)) {
    fs.writeFileSync(
      gradlewPath,
      `#!/usr/bin/env sh
echo "[./gradlew shim from postinstall] Skipping native Gradle build (Expo app)."
exit 0
`,
      { encoding: 'utf8', mode: 0o755 }
    );
    console.log('[prepare-gradle-shim] Created repo-root ./gradlew shim.');
  } else {
    try {
      fs.chmodSync(gradlewPath, 0o755);
      console.log('[prepare-gradle-shim] Ensured repo-root ./gradlew is executable.');
    } catch {
      // ignore chmod failures in locked environments
    }
  }
} catch (err) {
  console.log('[prepare-gradle-shim] Non-fatal error:', err?.message || err);
}
