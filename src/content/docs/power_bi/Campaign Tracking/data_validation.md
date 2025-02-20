---
title: Data Validation
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Data Sources Last Refreshed'
		lineageTag: 04ef2427-2d29-46a5-8d01-051a295f21da

		column Column1
			dataType: string
			lineageTag: 84c9f60b-ec10-429d-9587-7da58a4627c4
			summarizeBy: none
			sourceColumn: Column1

			annotation SummarizationSetBy = Automatic

		partition 'Data Sources Last Refreshed' = m
			mode: import
			source =
					let
					    Source = DateTime.LocalNow(),
					    #"Converted to Table" = #table(1, {{Source}})
					in
					    #"Converted to Table"

		annotation PBI_ResultType = Table

		annotation PBI_NavigationStepName = Navigation
```
