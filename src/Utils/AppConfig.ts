class AppConfig {
    public productsUrl = "http://localhost:3030/api/products/"; // Include the ending slash
}

const appConfig = new AppConfig();

export default appConfig; // מחצינים את המשתנה ולא את המחלקה
