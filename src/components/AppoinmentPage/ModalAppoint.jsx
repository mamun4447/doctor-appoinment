import React from "react";
import { format } from "date-fns";

const ModalAppoint = ({ treatment, selectDate }) => {
  const { name, slots } = treatment;
  const date = format(selectDate, "PP");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          {/* ====Form==== */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 mt-10"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              placeholder="Your name"
              type="text"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="text"
              placeholder="Your email"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              placeholder="Your Contact"
              type="text"
              className="input input-bordered w-full"
            />
            {/* ======Button======= */}
            <label
              htmlFor="booking-modal"
              type="submit"
              className="btn btn-accent input-bordered w-full"
            >
              Submit
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAppoint;
