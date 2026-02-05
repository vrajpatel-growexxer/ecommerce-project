module.exports = {
database: 'mongodb://localhost:27017',
port: 3000,
security: {
jwtSecret: 'secret-key',
tokenExpiry: '24h'
}
};