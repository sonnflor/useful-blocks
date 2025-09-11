//% weight=100 color=#0fbc11 icon="↻"
//% block="Useful Blocks"
namespace usefulBlocks {
    /**
     * Wiederhole den Block solange, bis die Bedingung erfüllt ist.
     */
    //% block="repeat until %condition"
    //% condition.shadow=logic_boolean
    //% group="Control"
    //% blockId=useful_repeat_until
    export function repeatUntil(condition: () => boolean, body: () => void): void {
        while (!condition()) {
            body();
        }
    }
}