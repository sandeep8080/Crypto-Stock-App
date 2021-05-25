import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from '../headerBar/HeaderBar';

const PageLayout = ({ children }) => {
    return (
        <Container fluid className='p-0'>
            <div className="d-flex flex-column min-vh-100" >
                <header>
                    <PageHeader />
                </header>
                <main>
                    {children}
                </main>
                <footer className='mt-auto'>
                    Footer
            </footer>
            </div>

        </Container>
    )
};

export default PageLayout;