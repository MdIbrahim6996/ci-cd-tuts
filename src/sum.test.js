import sum from './sum'
import { describe, it, expect } from 'vitest'

describe("sum functin test",()=>{
    it("returns 0 with no numbers", ()=>{
        expect(sum()).toBe(0)
    })

    it("returns same number with 1 numbers", ()=>{
        expect(sum(1)).toBe(1)
    })

    it("returns sum number with 2 numbers", ()=>{
        expect(sum(1, 2)).toBe(3)
    })
})
