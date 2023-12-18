import PropClass from "./DAY 4/PropClass"
import PropFunction from "./DAY 4/PropFunction"
import Withoutpropsfun from "./DAY 4/Withoutpropsfun"
import ArrowProps from "./DAY 4/ArrowProps"
import Stateclass from "./DAY 4/StateClass"
import StateFunction from "./DAY 4/StateFunction"
import StateHoldObjects from "./DAY 4/StateHoldObjects"
import Demo from "./Component/Day6/Demo.js";
import ErrorBoundary from "./Component/Day 8/ErrorBoundary"
import Lifecycle from "./Component/Day 8/LifeCycle.js"
import Hero from "./Component/Day 8/hero"
export default function App()
{
  return (
    <div>
     <PropFunction name="Dhoni"></PropFunction>
     <PropClass College="Cricket"></PropClass>
     <Withoutpropsfun person="Sachin" place="Chepauk"></Withoutpropsfun>
     <ArrowProps nick="Mahi"></ArrowProps>
     <Stateclass></Stateclass>
     <StateFunction></StateFunction>
     <StateHoldObjects></StateHoldObjects>
    <Demo></Demo>
    <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
       </ErrorBoundary>
       <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
       </ErrorBoundary>
       <Lifecycle></Lifecycle>
    </div>
  )
}


