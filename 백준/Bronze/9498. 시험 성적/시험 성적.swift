//
//  main.swift
//  myAlgorithm
//
//  Created by Hyeonho on 2023/07/04.
//

import Foundation

let input = Int(readLine()!)
if let input2 = input {
    switch input2 {
    case 90 ... 100:
        print("A")
    case 80 ... 89:
        print("B")
    case 70 ... 79:
        print("C")
    case 60 ... 69:
        print("D")
    default:
        print("F")
    }
}


