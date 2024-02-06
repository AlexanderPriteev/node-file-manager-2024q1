module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "settings": {
        "import/resolver": {
            "node": { "extensions": [".js", ".mjs"] }
        }
    },
    "rules": {
        "no-console": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
            }
        ]
    }
}
