import areYouFun from '../src/areYouFun'

describe("async test suite", () => {
  describe("fun test", () => {
    it("tells me if it's fun", () => {
      const result = areYouFun()
      expect(result).toEqual(true)
    })
  })
})
