import { ResponsiveFunnel } from "@nivo/funnel"
import { funnelData } from "../../constants"

const Funnel = () => {
    return (
        <div className="h-96 bg-gray-800 w-1/2 rounded-xl">
            <ResponsiveFunnel
                data={funnelData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                valueFormat=">-.4s"
                colors={{ scheme: 'spectral' }}
                borderWidth={20}
                labelColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            3
                        ]
                    ]
                }}
                beforeSeparatorLength={100}
                beforeSeparatorOffset={20}
                afterSeparatorLength={100}
                afterSeparatorOffset={20}
                currentPartSizeExtension={10}
                currentBorderWidth={40}
                motionConfig="wobbly" />
        </div>
    )
}

export default Funnel
