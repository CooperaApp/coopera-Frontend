

const TableHeading = ({headerOne, headerTwo, headerThree, headerFour, headerFive, headerSix}) => {
  return (
    <div>
      <table className="table-auto w-full">
        <thead className="border">
          <tr className="">
            <th className="activities-heading px-4 py-2 text-left">{headerOne}</th>
            <th className="activities-heading px-4 py-2 text-left">{headerTwo}</th>
            <th className="activities-heading px-4 py-2 text-left">{headerThree}</th>
            <th className="activities-heading px-4 py-2 text-left">{headerFour}</th>
            <th className="activities-heading px-4 py-2 text-left">{headerFive}</th>
            <th className="activities-heading px-4 py-2 text-left">{headerSix}</th>
          </tr>
        </thead>
      </table>

    </div>
  );
};

export default TableHeading;