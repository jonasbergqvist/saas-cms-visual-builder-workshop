import { FragmentType, useFragment, graphql } from '@/graphql'
import parse from 'html-react-parser';

export const SimpleElementFragment = graphql(/* GraphQL */ `
    fragment SimpleElement on SimpleElement
    {
        TestProperty {
            html
        }
    }
`)
 
const SimpleElementComponent = (props: {
    element: FragmentType<typeof SimpleElementFragment>
}) => {
    const element = useFragment(SimpleElementFragment, props.element)
    return (
        <div>{parse(element.TestProperty?.html ?? '')}</div>
    )
}
 
export default SimpleElementComponent