
// SCSS
import './SpinningGlobe.scss'

const SpinningGlobe = () => {
    return (

        <div className="globe-spinning"> 
            <iframe
                width="100%" height="100%"
                frameBorder="0"
                allowFullScreen=""
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking=""
                execution-while-out-of-viewport=""
                execution-while-not-rendered=""
                web-share=""
                src="https://sketchfab.com/models/fb78f4cc938144e6902dd5cff354d525/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0">
            </iframe> 
        </div>
    )
}

export default SpinningGlobe