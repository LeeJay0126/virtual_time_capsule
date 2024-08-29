import Nav from "../../components/nav/Nav";
import ImageUpload from "./ImageUpload";
import "./CreateCapsule.css";

const CreateCapsule = () => {

    return (
        <main className="createCapsule">
            <Nav/>
            <ImageUpload/>
        </main>
    );
};

export default CreateCapsule;