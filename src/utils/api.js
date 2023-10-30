// API endpoint base URL
export const API_URL = 'https://example.com/api/v1';

// Recipe search endpoint
export const RECIPE_SEARCH_URL = `${API_URL}/recipes/search`; 

// Recipe details endpoint 
export const RECIPE_DETAILS_URL = `${API_URL}/recipes/`;

// Pagination parameters 
export const PER_PAGE = 10;

// API key/authentication 
export const API_KEY = 'abc123';

// Headers
export const headers = {
  'Content-Type': 'application/json',
  'Authorization': API_KEY
}

// Error messages
export const ERROR_MESSAGES = {
  401: 'Unauthorized - invalid API key',
  404: 'Not found'  
}
