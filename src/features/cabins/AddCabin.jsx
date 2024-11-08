import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// export default function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   const handleButtonClick = () => {
//     setIsOpenModal((prevShow) => !prevShow); // Toggle between true and false
//   };

//   return (
//     <div>
//       <Button onClick={handleButtonClick}>Add new cabin</Button>
//       {isOpenModal && (
//         <Modal onClose={()=>setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={()=>setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
