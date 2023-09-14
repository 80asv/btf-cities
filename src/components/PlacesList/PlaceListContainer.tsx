import PlaceListComponent from "./PlaceListComponent.tsx";

const PlaceListContainer = (props) => {
    return <PlaceListComponent setCity={props.setCity}/>;
};
export default PlaceListContainer;