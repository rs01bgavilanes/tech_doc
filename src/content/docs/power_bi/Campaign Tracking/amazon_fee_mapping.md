---
title: Amazon Fee Mapping
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Amazon Fee Mapping'
		lineageTag: 6208bfc8-61ff-4611-a8ea-186ae252c619

		column Id
			dataType: int64
			formatString: 0
			lineageTag: e3b345a8-bf27-4db7-9092-6a176ac5b6dd
			summarizeBy: count
			sourceColumn: Id

			annotation SummarizationSetBy = Automatic

		column 'Fee Name'
			dataType: string
			lineageTag: cd8de9c7-fb98-44a2-a62a-fc6324a9031c
			summarizeBy: none
			sourceColumn: Fee Name

			annotation SummarizationSetBy = Automatic

		column 'Resource Code'
			dataType: string
			lineageTag: 4c1c4ff6-d6d5-4f64-9c3d-f976b8b5f358
			summarizeBy: none
			sourceColumn: Resource Code

			annotation SummarizationSetBy = Automatic

		column 'GL Account'
			dataType: string
			lineageTag: 02ab2f5f-d8ce-4b91-9f91-3031d9b7f98b
			summarizeBy: none
			sourceColumn: GL Account

			annotation SummarizationSetBy = Automatic

		partition 'Amazon Fee Mapping' = m
			mode: import
			source =
					let
					    Source = Sql.Databases("rssql01"),
					    RSUAT140 = Source{[Name="RSUAT140"]}[Data],
					    #"dbo_RevolutionSupply$Amazon Fee Mapping$16a92810-c8ee-4b2e-bef7-56ae63123a9c" = RSUAT140{[Schema="dbo",Item="RevolutionSupply$Amazon Fee Mapping$16a92810-c8ee-4b2e-bef7-56ae63123a9c"]}[Data]
					in
					    #"dbo_RevolutionSupply$Amazon Fee Mapping$16a92810-c8ee-4b2e-bef7-56ae63123a9c"

		annotation PBI_ResultType = Table
```
