import { NextPage } from "next";


export default function TileCustom({ heading, button1,button2 }: {heading: string, button1: string, button2: string}) {
    return (
        <div className="mb-6">
                    <div className="card">
                        <div className="card-header">
                    <p className="card-header-title">{ heading}</p>
                        </div>
                        <div className="card-content">
                            <div className="columns">
                                <div className="column is-half">
                                    <a className="button is-primary is-outlined is-fullwidth" href="#">
                                { button1}
                                    </a>
                                </div>
                                <div className="column is-half">
                                    <a className="button is-fullwidth" href="#">
                                { button2}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  );
}    