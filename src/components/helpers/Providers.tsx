import {FC} from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {IProvidersProps} from "../../types/components/components_types.ts";
import {ThemeContextProvider} from "../../context/ThemeContext.tsx";


const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    }
);


const Providers: FC<IProvidersProps> = (props: IProvidersProps) => {
    return <ThemeContextProvider>
        <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </ThemeContextProvider>


}

export default Providers