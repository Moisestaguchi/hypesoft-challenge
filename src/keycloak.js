import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080', // URL do Keycloak
  realm: 'AuthShop',           // o nome do Realm criada 
  clientId: 'frontend-app',   // o Client ID 
});

export default keycloak;
