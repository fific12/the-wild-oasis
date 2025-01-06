// import { useState } from "react";
// import Heading from "../ui/Heading";
// import Row from "../ui/Row";
// import BookingTable from "../features/bookings/BookingTable";
// import BookingTableOperations from "../features/bookings/BookingTableOperations";
// import Button from "../ui/Button";
// import NewBookingForm from "../features/bookings/NewBookingForm";

// function Bookings() {
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   function toggleFormVisibility() {
//     setIsFormVisible((prevState) => !prevState);
//   }

//   return (
//     <>
//       <Row type="horizontal">
//         <Heading as="h1">All bookings</Heading>
//         <BookingTableOperations />
//       </Row>
//       {!isFormVisible && (
//         <Row type="horizontal" style={{ justifyContent: "flex-start" }}>
//           <Button onClick={toggleFormVisibility} $variation="primary" style={{ alignSelf: "flex-start" }} toggleformvisibility={toggleFormVisibility}>
//             New Booking
//           </Button>
//         </Row>
//       )}

//       {isFormVisible ? <NewBookingForm /> : <BookingTable />}
//     </>
//   );
// }

// export default Bookings;

import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Button from "../ui/Button";
import NewBookingForm from "../features/bookings/NewBookingForm";

function Bookings() {
  const [showNewBookingForm, setShowNewBookingForm] = useState(false);

  function toggleNewBookingForm() {
    setShowNewBookingForm((prevState) => !prevState);
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      {!showNewBookingForm && (
        <Row type="horizontal" style={{ justifyContent: "flex-start" }}>
          <Button
            onClick={toggleNewBookingForm}
            $variation="primary"
            style={{ alignSelf: "flex-start" }}
          >
            New Booking
          </Button>
        </Row>
      )}
      {showNewBookingForm ? (
        <NewBookingForm toggleFormVisibility={toggleNewBookingForm} />
      ) : (
        <BookingTable />
      )}
    </>
  );
}

export default Bookings;

