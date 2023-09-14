import PlaceListComponent from "./PlaceListComponent.tsx";
import {City} from "../../App.tsx";

interface PlaceListContainerProps {
   setCity: (city: City | null) => void;
}

const PlaceListContainer = (props: PlaceListContainerProps) => {
    return <PlaceListComponent setCity={props.setCity}/>;
};
export default PlaceListContainer;