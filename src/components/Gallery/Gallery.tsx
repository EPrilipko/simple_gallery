import * as React from 'react';
import { Image as ImageProps } from '@typings';
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';

interface Props {
    images: ImageProps[];
    currentGalleryPosition: number;
}

export function Gallery({
    images,
    currentGalleryPosition,
}: Props): JSX.Element {
    return (
        <div className="galleryWrapper">
            <Container>
                <Row>
                    {images.map((image, i) =>
                        i < currentGalleryPosition ?
                            (
                                <Col key={image.id}>
                                    <div className="colContent">
                                        <Image
                                            src={image.thumbnailUrl}
                                            className="image"
                                            rounded
                                            alt={image.title}
                                        />

                                        <div className="title">
                                            {image.title}
                                        </div>
                                    </div>
                                </Col>
                            ) :
                            null
                        )}
                </Row>
            </Container>
        </div>
    );
}
