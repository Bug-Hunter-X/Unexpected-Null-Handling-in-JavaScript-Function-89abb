# Unexpected Null Handling in JavaScript Function

This repository demonstrates an uncommon code error in JavaScript related to null handling within a function. The `foo` function is designed to add two numbers, but its null handling is flawed, causing unexpected behavior when null values are passed as arguments.

## Bug Description

The function is supposed to add two numbers. However, when either or both arguments are `null`, it returns `null` instead of providing a default value or an error to help indicate the issue. This might lead to unexpected results or program crashes in certain scenarios.

## Solution

The solution addresses this issue by providing an alternative implementation of `foo` that handles `null` values appropriately.  The solution either throws an error or handles null as 0.