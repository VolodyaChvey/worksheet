import PagePB from "./PagePB";

export default function PanelBottom({component}){
const components = {
    "Page":<PagePB/>
}
    return(
        <div className="panelBottom">
            {components[component]}
        </div>
    )
}