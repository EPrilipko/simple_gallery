import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Album } from '@typings';

interface Props {
    albums: Album[];
    selectedAlbumId: number | null;
    onSelect: (selectedItem: string | null) => void;
}

export function AlbumDropdown({
    albums,
    selectedAlbumId,
    onSelect
}: Props): JSX.Element {
    const label = selectedAlbumId ?
        albums.find(album => album.id === selectedAlbumId)?.title :
        'Выберите альбом';

    return (
        <React.Fragment>
            Альбом

            <Dropdown>
                <Dropdown.Toggle variant="success">
                    {label}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {albums.map(album => (
                        <Dropdown.Item
                            key={album.id}
                            eventKey={String(album.id)}
                            onSelect={onSelect}
                        >{album.title}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    );
}