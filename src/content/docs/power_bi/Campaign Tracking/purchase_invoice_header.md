---
title: Purchase Invoice Header
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Item Unit of Measure'
		lineageTag: aa1184ce-d0b6-4c64-a52c-bb976f6cf9cf

		column 'Item No_'
			dataType: string
			lineageTag: c751dcb8-cf5c-43cf-bb47-61f71572666f
			summarizeBy: none
			sourceColumn: Item No_

			annotation SummarizationSetBy = Automatic

		column Code
			dataType: string
			lineageTag: d4478e39-91ed-4227-be46-2db3ed0dd30c
			summarizeBy: none
			sourceColumn: Code

			annotation SummarizationSetBy = Automatic

		column 'Qty_ per Unit of Measure'
			dataType: double
			lineageTag: 4de01aa3-3d8c-4e6f-b6ef-e186eb14c983
			summarizeBy: sum
			sourceColumn: Qty_ per Unit of Measure

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		partition 'Item Unit of Measure' = m
			mode: import
			source =
					let
					    Source = Sql.Databases("rssql01"),
					    RSUAT140 = Source{[Name="RSUAT140"]}[Data],
					    #"dbo_RevolutionSupply$Item Unit of Measure" = RSUAT140{[Schema="dbo",Item="RevolutionSupply$Item Unit of Measure"]}[Data],
					    #"Filtered Rows" = Table.SelectRows(#"dbo_RevolutionSupply$Item Unit of Measure", each ([Code] = "INNER PACK")),
					    #"Removed Columns" = Table.RemoveColumns(#"Filtered Rows",{"Length", "Width", "Height", "Cubage", "Weight", "timestamp"})
					in
					    #"Removed Columns"

		annotation PBI_ResultType = Table
```
