import { PrimaryModal } from "./primary-modal";

export const Modals = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Modal 1
      </button>
      <PrimaryModal title="Who is champion?" id={"exampleModal"}>
        <div>We are champions!</div>
      </PrimaryModal>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        Modal 2
      </button>
      <PrimaryModal title="Make the pays" id={"exampleModal2"}>
        <div>
          analytics
          <form>
            <input type="input" />
          </form>
        </div>
      </PrimaryModal>
    </div>
  );
};
