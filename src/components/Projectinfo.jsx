import React from 'react';
import { connect } from "react-redux";
import config from 'react-global-configuration';

const mapStateToProps = (state, ownProps) => {
    let projectID = atob(ownProps.project_id); let oneProjectObj = '';
    state.projectReducer.allProjects.map(item => {
        return (item.id === projectID) ? oneProjectObj = item : '';
    })
    return { oneProjectObj }
}
const Projectinfo = props => {
    const image_name = config.get('api_image_url') + props.oneProjectObj.file_name;
    return (
        <section className="video-area-promotion padding-bottom padding-top">
            <div className="container">
                <div className="video-wrapper bg_img" data-background={image_name} style={{ backgroundImage: 'url("' + image_name + '")' }}>
                </div>
                <div className="video-content">
                    <h3 className="title text-center">{props.oneProjectObj.title}</h3>
                    <p style={{ marginBottom: "40px" }}>Justo libero tortor justo nec in massa, ad lorem aliquam volutpat ut. Nulla eget ligula magna etiam
                      eros,
                      semper volutpat morbi, sem eu. In lectus malesuada sit feugiat, facilisi soluta, condimentum libero
                      amet
                      eget lorem, diam sed leo, ac velit porta ratione morbi nostra enim. Litora amet porttitor,
                      suspendisse
                      mollis at tempus dolor nulla, semper donec, pretium bibendum, nonummy a tincidunt sed nunc velit.
                      Dolor
                      ipsum venenatis lorem, dolor posuere parturient, quis condimentum leo lacinia, rhoncus felis
                      facilisis
                      tortor nunc, cras lectus. Porta ante gravida et, dolor duis mattis suspendisse eget. Non orci
                          aliquam,at vehicula nibh cum</p>
                </div>
                <div className="text-center">
                    <a target="_blank" href={props.oneProjectObj.website_url} className="custom-button active">Go to website</a>
                </div>
            </div>
        </section>
    )
}

export default connect(mapStateToProps)(Projectinfo);