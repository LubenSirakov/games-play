import './ErrorPage.css';

const ErrorPage = ({
    children
}) => {
    return (
        <section id="catalog-page" className="error-page">
            <h1>Page not found!</h1>
            
           { children && <h3 className="no-articles">{children}</h3>}
        </section>
    );
};

export default ErrorPage;