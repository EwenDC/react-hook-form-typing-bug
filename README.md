# react-hook-form-typing-bug
Example setup for typing bug in the react-hook-form package

### Reproduction steps
1. Open a CLI and navigate to the /cool-library/ subfolder
2. Run the commands 'yarn install', 'yarn build', then 'yarn link'
3. Navigate to the /cool-app/ subfolder
4. Run the commands 'yarn install' then 'yarn link "@ewendc/cool-library"'
5. Now run the command 'yarn build'. The build should fail due to a typescript error at cool-app/src/index.tsx(14,15)
