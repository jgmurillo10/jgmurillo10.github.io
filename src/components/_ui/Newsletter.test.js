import React from "react"
import renderer from "react-test-renderer"
import Newsletter from "./Newsletter"

describe("Newsletter", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Newsletter body="Body" />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
