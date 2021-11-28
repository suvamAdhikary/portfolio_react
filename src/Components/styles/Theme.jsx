

const colorPalate1 = {
    $prussian_blue: "#012a4aff",
    $indigo_dye: "#013a63ff",
    $indigo_dye_2: "#01497cff",
    $usafa_blue: "#014f86ff",
    $sapphire_blue: "#2a6f97ff",
    $celadon_blue: "#2c7da0ff",
    $blue_green: "#468fafff",
    $maximum_blue: "#61a5c2ff",
    $dark_sky_blue: "#89c2d9ff",
    $light_blue: "#a9d6e5ff"
}
const colorPalate2 = {
    $alice_blue: "#edf2fbff",
    $lavender_web: "#e2eafcff",
    $lavender_web_2: "#d7e3fcff",
    $periwinkle_crayola: "#ccdbfdff",
    $lavender_blue: "#c1d3feff",
    $lavender_blue_2: "#b6ccfeff",
    $baby_blue_eyes: "#abc4ffff"
}


export const Theme = {
    dark: {
        bg_clr: colorPalate1.$prussian_blue,
        fnt_clr: colorPalate1.$light_blue,
        highlighter: colorPalate1.$usafa_blue,
        brdr_clr: colorPalate1.$dark_sky_blue,
        btn_clr: colorPalate1.$maximum_blue,
        left: '25px',
        tgl_clr: colorPalate1.$light_blue
    },
    light: {
        bg_clr: colorPalate1.$light_blue,
        fnt_clr: colorPalate1.$prussian_blue,
        highlighter: colorPalate1.$maximum_blue,
        brdr_clr: colorPalate1.$indigo_dye,
        btn_clr: colorPalate1.$usafa_blue,
        left: '0px',
        tgl_clr: colorPalate1.$prussian_blue
    }
}
