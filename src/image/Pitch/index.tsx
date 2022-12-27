const pitchImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAIABJREFUeF7t3QmUHVWdx/F/d3pJp5N0J3SSzkL2FRMQZVFAUHFQGGCAQUAE1wHBcYYRBRH3kREVEWfEBRHHARTEAAqKogKyKMgOiWRfyL7R6SSdrbvTPec2Imsn79WtW7f+9f++czgz5/jurfp/7q8uf6rfq1chvBBAAAEEEEDAnECFuYopGAEEEEAAAQSEBoAQIIAAAgggYFCABsDgolMyAggggAACNABkAAEEEEAAAYMCNAAGF52SEUAAAQQQoAEgAwgggAACCBgUoAEwuOiUjAACCCCAAA0AGUAAAQQQQMCgAA2AwUWnZAQQQAABBGgAyAACCCCAAAIGBWgADC46JSOAAAIIIEADQAYQQAABBBAwKEADYHDRKRkBBBBAAAEaADKAAAIIIICAQQEaAIOLTskIIIAAAgjQAJABBBBAAAEEDArQABhcdEpGAAEEEECABoAMIIAAAgggYFCABsDgolMyAggggAACNABkAAEEEEAAAYMCNAAGF52SEUAAAQQQoAEgAwgggAACCBgUoAEwuOiUjAACCCCAAA0AGUAAAQQQQMCgAA2AwUWnZAQQQAABBGgAyAACCCCAAAIGBWgADC46JSOAAAIIIEADQAYQQAABBBAwKEADYHDRKRkBBBBAAAEaADKAAAIIIICAQQEaAIOLTskIIIAAAgjQAJABBBBAAAEEDArQABhcdEpGAAEEEECABoAMIIAAAgggYFCABsDgolMyAggggAACNABkAAEEEEAAAYMCNAAGF52SEUAAAQQQoAEgAwgggAACCBgUoAEwuOiUjAACCCCAAA0AGUAAAQQQQMCgAA2AwUWnZAQQQAABBGgAyAACCCCAAAIGBWgADC46JSOAAAIIIEADQAYQQAABBBAwKEADYHDRKRkBBBBAAAEaADKAAAIIIICAQQEaAIOLTskIIIAAAgjQAJABBBBAAAEEDArQABhcdEpGAAEEEECABoAMIIAAAgggYFCABsDgolMyAggggAACNABkAAEEEEAAAYMCNAAGF52SEUAAAQQQoAEgAwgggAACCBgUoAEwuOiUjAACCCCAAA0AGUAAAQQQQMCgAA2AwUWnZAQQQAABBGgAyAACCCCAAAIGBWgADC46JSOAAAIIIEADQAYQQAABBBAwKEADYHDRKRkBBBBAAAEaADKAAAIIIICAQQEaAIOLTskIIIAAAgjQAJABBBBAAAEEDArQABhcdEpGAAEEEECABoAMIIAAAgggYFCABsDgolMyAggggAACNABkAAEEEEAAAYMCNAAGF52SEUAAAQQQoAEgAwgggAACCBgUoAEwuOiUjAACCCCAAA0AGUAAAQQQQMCgAA2AwUWnZAQQQAABBGgAyAACCCCAAAIGBWgADC46JSOAAAIIIEADQAYQQAABBBAwKEADYHDRKRkBBBBAAAEaADKAAAIIIICAQQEaAIOLTskIIIAAAgjQAJABBBBAAAEEDArQABhcdEpGAAEEEECABoAMIIAAAgggYFCABsDgolMyAggggAACNABkAAEEEEAAAYMCNAAGF52SEUAAAQQQoAEgAwgggAACCBgUoAEwuOiUjAACCCCAAA0AGUAAAQQQQMCgAA2AwUWnZAQQQAABBGgAyAACCCCAAAIGBWgADC46JSOAAAIIIEADQAYQQAABBBAwKEADYHDRKRkBBBBAAAEaADKAAAIIIICAQQEaAIOLTskIIIAAAghUHHDHxd0wIIAAAggggIAtARoAW+tNtQgggAACCPQI0AAQBAQQQAABBAwK0AAYXHRKRgABBBBAgAaADCCAAAIIIGBQgAbA4KJTMgIIIIAAAjQAZAABBBBAAAGDAjQABhedkhFAAAEEEKABIAMIIIAAAggYFKABMLjolIwAAggggAANABlAAAEEEEDAoAANgMFFp2QEEEAAAQRoAMgAAggggAACBgVoAAwuOiUjgAACCCBAA0AGEEAAAQQQMChAA2Bw0SkZAQQQQAABGgAygAACCCCAgEEBGgCDi07JCCCAAAII0ACQAQQQQAABBAwK0AAYXHRKRgABBBBAgAaADCCAAAIIIGBQgAbA4KJTMgIIIIAAAjQAZAABBBBAAAGDAjQABhedkhFAAAEEEKABIAMIIIAAAggYFKABMLjolIwAAggggAANABlAAAEEEEDAoAANgMFFp2QEEEAAAQRoAMgAAggggAACBgVoAAwuOiUjgAACCCBAA0AGEEAAAQQQMChAA2Bw0SkZAQQQQACB6A3Aba//GKuAAAIIIICAOYHjn7wyas00AFH5OTgCCCCAgFUBGgDuAFjNPnUjgAACpgVoAGgATF8AFI8AAghYFaAB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ZAABBBBAAAGDAjQABhedkhFAAAEEEKABIAMIIIAAAggYFKABMLjolIwAAggggAANABlAAAEEEEDAoAANgMFFp2QEEEAAAQRoAMgAAggggAACBgVoAAwuOiUjgAACCCBAA0AGEEAAAQQQMChAA2Bw0SkZAQQQQAABGgAygAACCCCAgEEBGgCDi07JCCCAAAII0ACQAQQQQAABBAwK0AAYXHRKRgABBBBAgAaADCCAAAIIIGBQgAbA4KJTMgIIIIAAAjQAZAABBBBAAAGDAjQABhedkhFAAAEEEKABIAMIIIAAAggYFKABMLjolIwAAggggAANABlAAAEEEEDAoAANgMFFp2QEEEAAAQRoAMgAAggggAACBgVoAAwuOiUjgAACCCBAA0AGEEAAAQQQMChAA2Bw0SkZAQQQQAABGgAygAACCCCAgEEBGgCDi07JCCCAAAII0ACQAQQQQAABBAwK0AAYXHRKRgABBBBAgAaADCCAAAIIIGBQgAbA4KJTMgIIIIAAAjQAZAABBBBAAAGDAjQABhedkhFAAAEEEKABIAMIIIAAAggYFKABMLjolIwAAggggAANABlAAAEEEEDAoAANgMFFp2QEEEAAAQRoAMgAAggggAACBgVoAAwuOiUjgAACCCBAA0AGEEAAAQQQMChAA2Bw0SkZAQQQQAABGgAygAACCCCAgEEBGgCDi07JCCCAAAII0ACQAQQQQAABBAwK0AAYXHRKRgABBBBAgAaADCCAAAIIIGBQgAbA4KJTMgIIIIAAAjQAZAABBBBAAAGDAjQABhedkhFAAAEEEKABIAMIIIAAAggYFKABMLjolIwAAggggAANABlAAAEEEEDAoAANgMFFp2QEEEAAAQRoAMgAAggggAACBgVoAAwuOiUjgAACCCBAA0AGEEAAAQQQMChAA2Bw0SkZAQQQQAABGgAygAACCCCAgEEBGgCDi07JCCCAAAII/D/OPPTevkwgkQAAAABJRU5ErkJggg==';

export default pitchImg;