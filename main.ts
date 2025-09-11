namespace usefulBlocks {
    //% block="while $condition do"
    //% condition.shadow=logic_boolean
    //% blockType="statement"
    export function whileLoop(condition: () => boolean, body: () => void): void {
        while (condition()) {
            body();
        }
    }
}