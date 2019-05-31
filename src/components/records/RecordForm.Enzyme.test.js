import React from "react";
import RecordForm from "./RecordForm";
import { shallow } from "enzyme";

function renderRecordForm(args) {
  const defaultProps = {
    depts: [],
    record: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<RecordForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderRecordForm();
  // console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add record");
});

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderRecordForm();
  expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save button as "Saving..." when saving', () => {
  const wrapper = renderRecordForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
