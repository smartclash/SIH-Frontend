import { NextPage } from 'next';
import Link from 'next/link';
import ITile from '../types/TileTypes';

const Tile: NextPage<ITile> = (props) => {
    return (
        <div className="mb-6">
            <div className="card">
                <div className="card-header">
                    <p className="card-header-title">{props.heading}</p>
                </div>
                <div className="card-content">
                    <div className="columns">
                        <div className="column is-half">
                            <Link href={props.primary.link}>
                                <a className="button is-primary is-outlined is-fullwidth">
                                    {props.primary.text}
                                </a>
                            </Link>
                        </div>
                        <div className="column is-half">
                            <Link href={props.secondary.link}>
                                <a className="button is-fullwidth">
                                    {props.secondary.text}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}    

export default Tile;
