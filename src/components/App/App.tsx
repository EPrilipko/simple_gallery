import * as React from 'react';

import { Preloader } from '../Preloader';
import { AlbumDropdown } from '../AlbumDropdown';
import { ExpandSizeDropdown } from '../ExpandSizeDropdown';
import { Gallery } from '../Gallery';
import { ExpandButton } from '../ExpandButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

interface Props {
    showPreloader: boolean;
    showControls: boolean;
}

export function App({
    showPreloader,
    showControls
}: Props): JSX.Element {
    return (
        <div className="app">
            {showPreloader && <Preloader />}

            <div className="controls">
                <div className="dropdown">
                    <AlbumDropdown />
                </div>

                {showControls && <div className="dropdown">
                    <ExpandSizeDropdown />
                </div>}

            </div>

            <Gallery />

            {showControls && <div className="expandButton">
                <ExpandButton />
            </div>}
        </div>
    );
}


