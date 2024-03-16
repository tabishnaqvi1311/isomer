import { useState } from "react"

export const useMultiForm = (steps) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        window.scroll(0, 0);
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })

    }
    function back() {
        window.scroll(0, 0)
        setCurrentStepIndex(i => {
            if (i <= 0) return i
            return i - 1
        })
    }
    function goTo(index) {
        setCurrentStepIndex(index)
    }
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        goTo,
        FirstStep: currentStepIndex === 0,
        LastStep: currentStepIndex === steps.length - 1,
        next, back,
        steps,
    }
}