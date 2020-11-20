import * as React from 'react';
import { Spinner } from 'react-bootstrap';

import './Preloader.css';

export function Preloader(): JSX.Element {
    return (
        <div className="preloaderWrapper">
            <div className="preloader">
                <Spinner animation="border" />
            </div>
        </div>
    )
}