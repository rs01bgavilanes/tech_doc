---
title: Sales Invoice Header
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table 'Sales Credit Memo Line'
		lineageTag: 970e9fc7-9ad8-4934-a5fe-f04c2a52d11b

		column 'Document No_'
			dataType: string
			lineageTag: ca65fe39-0b99-4780-8d92-35ac59857828
			summarizeBy: none
			sourceColumn: Document No_

			annotation SummarizationSetBy = Automatic

		column 'Line No_'
			dataType: int64
			formatString: 0
			lineageTag: 9c379b79-8af7-42d0-9eb5-352fc7a14ab3
			summarizeBy: sum
			sourceColumn: Line No_

			annotation SummarizationSetBy = Automatic

		column 'Sell-to Customer No_'
			dataType: string
			lineageTag: c31c54b3-54a3-4f77-b53f-a8f296d98397
			summarizeBy: none
			sourceColumn: Sell-to Customer No_

			annotation SummarizationSetBy = Automatic

		column Type
			dataType: int64
			formatString: 0
			lineageTag: 328630be-8d00-4112-b087-9ec4cd6c8c98
			summarizeBy: sum
			sourceColumn: Type

			annotation SummarizationSetBy = Automatic

		column No_
			dataType: string
			lineageTag: 96bfe34c-144b-4d6a-986d-17e311b22917
			summarizeBy: none
			sourceColumn: No_

			annotation SummarizationSetBy = Automatic

		column 'Location Code'
			dataType: string
			lineageTag: 069444fa-4e79-4df2-84c5-7ae55ec63464
			summarizeBy: none
			sourceColumn: Location Code

			annotation SummarizationSetBy = Automatic

		column 'Posting Group'
			dataType: string
			lineageTag: 68ab8f0d-f99e-467c-9ab8-6137b570fda3
			summarizeBy: none
			sourceColumn: Posting Group

			annotation SummarizationSetBy = Automatic

		column 'Shipment Date'
			dataType: dateTime
			formatString: General Date
			lineageTag: a6c15749-8e6e-4b3c-92e1-9c2362038b14
			summarizeBy: none
			sourceColumn: Shipment Date

			variation Variation
				isDefault
				relationship: 46e21c75-cf3b-45f8-a16c-50935db59a25
				defaultHierarchy: LocalDateTable_bc954006-988d-4c96-a4ce-27c49c081eb2.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column Description
			dataType: string
			lineageTag: 01f34729-208e-4512-bfa1-fff7332c9fb3
			summarizeBy: none
			sourceColumn: Description

			annotation SummarizationSetBy = Automatic

		column 'Description 2'
			dataType: string
			lineageTag: cdc197c2-3e57-41b3-871b-c707fa194be5
			summarizeBy: none
			sourceColumn: Description 2

			annotation SummarizationSetBy = Automatic

		column 'Unit of Measure'
			dataType: string
			lineageTag: 87ea97a6-0ae0-439c-9895-19ebcd96f2ce
			summarizeBy: none
			sourceColumn: Unit of Measure

			annotation SummarizationSetBy = Automatic

		column Quantity
			dataType: double
			lineageTag: 5f217840-ef10-4968-a14d-5899b235d482
			summarizeBy: sum
			sourceColumn: Quantity

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Unit Price'
			dataType: double
			lineageTag: 35a219fa-163f-4292-b407-6152d847a650
			summarizeBy: sum
			sourceColumn: Unit Price

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Unit Cost (LCY)'
			dataType: double
			lineageTag: dc621a60-362e-4a8e-8ef6-113eb54a858e
			summarizeBy: sum
			sourceColumn: Unit Cost (LCY)

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'VAT _'
			dataType: double
			lineageTag: 6028eea8-5754-46fb-af49-cbc81beacd43
			summarizeBy: sum
			sourceColumn: VAT _

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Line Discount _'
			dataType: double
			lineageTag: 9501c66c-2cee-4072-a8e6-1f43b6da48ff
			summarizeBy: sum
			sourceColumn: Line Discount _

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Line Discount Amount'
			dataType: double
			lineageTag: 996ea6d0-308a-42b1-946d-820f54955ec6
			summarizeBy: sum
			sourceColumn: Line Discount Amount

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column Amount
			dataType: double
			lineageTag: bf930cee-dde1-46be-af5d-6322ad53822a
			summarizeBy: sum
			sourceColumn: Amount

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Amount Including VAT'
			dataType: double
			lineageTag: ac91b788-7c17-4704-b171-7e6af153c90e
			summarizeBy: sum
			sourceColumn: Amount Including VAT

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Allow Invoice Disc_'
			dataType: int64
			formatString: 0
			lineageTag: 44141639-9fbd-4b61-863e-9b25c56ae78c
			summarizeBy: sum
			sourceColumn: Allow Invoice Disc_

			annotation SummarizationSetBy = Automatic

		column 'Gross Weight'
			dataType: double
			lineageTag: 6da4537d-80fe-45ec-8a1e-b23d28596858
			summarizeBy: sum
			sourceColumn: Gross Weight

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Net Weight'
			dataType: double
			lineageTag: b22bd756-1bdf-4462-b860-66241d37f80c
			summarizeBy: sum
			sourceColumn: Net Weight

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Units per Parcel'
			dataType: double
			lineageTag: f2362e6d-e10a-43a3-b71e-973836c7ad81
			summarizeBy: sum
			sourceColumn: Units per Parcel

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Unit Volume'
			dataType: double
			lineageTag: d9a70fb9-bbbf-48a6-909d-be41e8d0ccb2
			summarizeBy: sum
			sourceColumn: Unit Volume

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Appl_-to Item Entry'
			dataType: int64
			formatString: 0
			lineageTag: 2cd081af-b01a-43eb-923a-5e971681759e
			summarizeBy: sum
			sourceColumn: Appl_-to Item Entry

			annotation SummarizationSetBy = Automatic

		column 'Shortcut Dimension 1 Code'
			dataType: string
			lineageTag: a33e0b20-063a-4fcc-9044-f87643c1b8a3
			summarizeBy: none
			sourceColumn: Shortcut Dimension 1 Code

			annotation SummarizationSetBy = Automatic

		column 'Shortcut Dimension 2 Code'
			dataType: string
			lineageTag: 58206391-b57e-43a1-8b40-a95c35862f43
			summarizeBy: none
			sourceColumn: Shortcut Dimension 2 Code

			annotation SummarizationSetBy = Automatic

		column 'Customer Price Group'
			dataType: string
			lineageTag: a77440d9-7ea4-483c-84a9-48a692519c14
			summarizeBy: none
			sourceColumn: Customer Price Group

			annotation SummarizationSetBy = Automatic

		column 'Job No_'
			dataType: string
			lineageTag: 149658ca-7b6b-48e1-99fb-bc8f39e76693
			summarizeBy: none
			sourceColumn: Job No_

			annotation SummarizationSetBy = Automatic

		column 'Work Type Code'
			dataType: string
			lineageTag: 755e01fb-7869-49a1-bfd9-638249e54314
			summarizeBy: none
			sourceColumn: Work Type Code

			annotation SummarizationSetBy = Automatic

		column 'Order No_'
			dataType: string
			lineageTag: aa86cd8b-1eb3-4cf9-99ca-f613b0faacf6
			summarizeBy: none
			sourceColumn: Order No_

			annotation SummarizationSetBy = Automatic

		column 'Order Line No_'
			dataType: int64
			formatString: 0
			lineageTag: 44bde438-586f-4cb4-9336-15529e14ebfc
			summarizeBy: sum
			sourceColumn: Order Line No_

			annotation SummarizationSetBy = Automatic

		column 'Bill-to Customer No_'
			dataType: string
			lineageTag: 021eb4aa-0615-4589-9c28-2e6afa53e277
			summarizeBy: none
			sourceColumn: Bill-to Customer No_

			annotation SummarizationSetBy = Automatic

		column 'Inv_ Discount Amount'
			dataType: double
			lineageTag: eefc7f4b-7782-440a-92d7-5f3003037aa9
			summarizeBy: sum
			sourceColumn: Inv_ Discount Amount

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Gen_ Bus_ Posting Group'
			dataType: string
			lineageTag: f41de571-25b4-4a4e-819e-44fbe8f1df9a
			summarizeBy: none
			sourceColumn: Gen_ Bus_ Posting Group

			annotation SummarizationSetBy = Automatic

		column 'Gen_ Prod_ Posting Group'
			dataType: string
			lineageTag: e52a5034-7870-48a8-976f-6fc3b4b00915
			summarizeBy: none
			sourceColumn: Gen_ Prod_ Posting Group

			annotation SummarizationSetBy = Automatic

		column 'VAT Calculation Type'
			dataType: int64
			formatString: 0
			lineageTag: df52faab-05d9-4f76-988b-98f918400eb2
			summarizeBy: sum
			sourceColumn: VAT Calculation Type

			annotation SummarizationSetBy = Automatic

		column 'Transaction Type'
			dataType: string
			lineageTag: a8b535f6-80d5-4f56-8ad0-b929bcc1ee44
			summarizeBy: none
			sourceColumn: Transaction Type

			annotation SummarizationSetBy = Automatic

		column 'Transport Method'
			dataType: string
			lineageTag: 6753ee04-fafb-41e6-8633-256d16d724b4
			summarizeBy: none
			sourceColumn: Transport Method

			annotation SummarizationSetBy = Automatic

		column 'Attached to Line No_'
			dataType: int64
			formatString: 0
			lineageTag: 64549ee3-e49e-47a5-bef0-a27384d0a1d4
			summarizeBy: sum
			sourceColumn: Attached to Line No_

			annotation SummarizationSetBy = Automatic

		column 'Exit Point'
			dataType: string
			lineageTag: 360ba035-60fd-4262-86b5-294a06ae83ea
			summarizeBy: none
			sourceColumn: Exit Point

			annotation SummarizationSetBy = Automatic

		column Area
			dataType: string
			lineageTag: 970a4711-c263-4513-9172-cda646f2e832
			summarizeBy: none
			sourceColumn: Area

			annotation SummarizationSetBy = Automatic

		column 'Transaction Specification'
			dataType: string
			lineageTag: 4d676532-5e66-4944-9cf4-480092c030a3
			summarizeBy: none
			sourceColumn: Transaction Specification

			annotation SummarizationSetBy = Automatic

		column 'Tax Category'
			dataType: string
			lineageTag: 304f13ec-9820-4713-b034-068ce9434794
			summarizeBy: none
			sourceColumn: Tax Category

			annotation SummarizationSetBy = Automatic

		column 'Tax Area Code'
			dataType: string
			lineageTag: 81c57c57-e96b-4a94-89dd-15e4608222d1
			summarizeBy: none
			sourceColumn: Tax Area Code

			annotation SummarizationSetBy = Automatic

		column 'Tax Liable'
			dataType: int64
			formatString: 0
			lineageTag: 4c25ee75-fdc0-4ec9-b6d3-c43b45465518
			summarizeBy: sum
			sourceColumn: Tax Liable

			annotation SummarizationSetBy = Automatic

		column 'Tax Group Code'
			dataType: string
			lineageTag: 987afed8-4f5d-43a4-a9db-92ea418a5455
			summarizeBy: none
			sourceColumn: Tax Group Code

			annotation SummarizationSetBy = Automatic

		column 'VAT Clause Code'
			dataType: string
			lineageTag: d2d218ad-9dd9-44ef-8625-c72d96de1209
			summarizeBy: none
			sourceColumn: VAT Clause Code

			annotation SummarizationSetBy = Automatic

		column 'VAT Bus_ Posting Group'
			dataType: string
			lineageTag: 0e4522b0-54a7-4646-b345-d76b6e154552
			summarizeBy: none
			sourceColumn: VAT Bus_ Posting Group

			annotation SummarizationSetBy = Automatic

		column 'VAT Prod_ Posting Group'
			dataType: string
			lineageTag: a78fd548-c034-4ee5-be8b-d8e5fd96aedc
			summarizeBy: none
			sourceColumn: VAT Prod_ Posting Group

			annotation SummarizationSetBy = Automatic

		column 'Blanket Order No_'
			dataType: string
			lineageTag: 6390a746-d853-471a-a22f-2151b69ffc16
			summarizeBy: none
			sourceColumn: Blanket Order No_

			annotation SummarizationSetBy = Automatic

		column 'Blanket Order Line No_'
			dataType: int64
			formatString: 0
			lineageTag: 324935e2-d8b3-4fba-9f06-75981b3971de
			summarizeBy: sum
			sourceColumn: Blanket Order Line No_

			annotation SummarizationSetBy = Automatic

		column 'VAT Base Amount'
			dataType: double
			lineageTag: a54ddd05-7d17-4b5b-ac8b-eb36115ae430
			summarizeBy: sum
			sourceColumn: VAT Base Amount

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Unit Cost'
			dataType: double
			lineageTag: 60129792-078b-4470-a280-c1933b8ffa1c
			summarizeBy: sum
			sourceColumn: Unit Cost

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'System-Created Entry'
			dataType: int64
			formatString: 0
			lineageTag: 0eb21d7f-e5af-4660-bf8c-ed3df98aee4f
			summarizeBy: sum
			sourceColumn: System-Created Entry

			annotation SummarizationSetBy = Automatic

		column 'Line Amount'
			dataType: double
			lineageTag: 12284b49-1305-4794-a0f9-c08c5e0b7f6e
			summarizeBy: sum
			sourceColumn: Line Amount

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'VAT Difference'
			dataType: double
			lineageTag: af48b568-b232-4468-90a7-80e8b4947e18
			summarizeBy: sum
			sourceColumn: VAT Difference

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'VAT Identifier'
			dataType: string
			lineageTag: f141b936-4972-43cf-b91b-3e35c0ee6d95
			summarizeBy: none
			sourceColumn: VAT Identifier

			annotation SummarizationSetBy = Automatic

		column 'IC Partner Ref_ Type'
			dataType: int64
			formatString: 0
			lineageTag: 8dc41ce3-fa5a-425f-827b-bc2917cce7f0
			summarizeBy: sum
			sourceColumn: IC Partner Ref_ Type

			annotation SummarizationSetBy = Automatic

		column 'IC Partner Reference'
			dataType: string
			lineageTag: 15917b67-71f6-47ef-9f65-3c5472998256
			summarizeBy: none
			sourceColumn: IC Partner Reference

			annotation SummarizationSetBy = Automatic

		column 'Prepayment Line'
			dataType: int64
			formatString: 0
			lineageTag: 8f1906e3-da94-42ad-9095-fc4620591498
			summarizeBy: sum
			sourceColumn: Prepayment Line

			annotation SummarizationSetBy = Automatic

		column 'IC Partner Code'
			dataType: string
			lineageTag: f9d70f25-85d6-4c0a-b381-b024c3b8e0f9
			summarizeBy: none
			sourceColumn: IC Partner Code

			annotation SummarizationSetBy = Automatic

		column 'Posting Date'
			dataType: dateTime
			formatString: mm/dd/yyyy
			lineageTag: df24d00d-a91c-47a6-bc95-3e9914bf514d
			summarizeBy: none
			sourceColumn: Posting Date

			variation Variation
				isDefault
				relationship: 6acc83d4-c994-4fc9-b6cf-a2b0114c8bb0
				defaultHierarchy: LocalDateTable_1752362e-d6c4-42ba-8869-de7a4b2cdd95.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column 'Pmt_ Discount Amount'
			dataType: double
			lineageTag: c684fa14-08fe-4410-a253-936b4f9b1b58
			summarizeBy: sum
			sourceColumn: Pmt_ Discount Amount

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Line Discount Calculation'
			dataType: int64
			formatString: 0
			lineageTag: 26620cf7-c14a-4fc5-8d5c-c1dbda8296a1
			summarizeBy: sum
			sourceColumn: Line Discount Calculation

			annotation SummarizationSetBy = Automatic

		column 'Dimension Set ID'
			dataType: int64
			formatString: 0
			lineageTag: 5506d970-d1de-4bdd-b2b5-e7a41fe38d31
			summarizeBy: count
			sourceColumn: Dimension Set ID

			annotation SummarizationSetBy = Automatic

		column 'Job Task No_'
			dataType: string
			lineageTag: 0e8a3dc9-acce-4103-a7a6-3781fd245f88
			summarizeBy: none
			sourceColumn: Job Task No_

			annotation SummarizationSetBy = Automatic

		column 'Job Contract Entry No_'
			dataType: int64
			formatString: 0
			lineageTag: 420096c6-99be-4ad7-b4e6-938e2e44920e
			summarizeBy: sum
			sourceColumn: Job Contract Entry No_

			annotation SummarizationSetBy = Automatic

		column 'Deferral Code'
			dataType: string
			lineageTag: 464c4277-a0e6-4c62-92b6-8fd1643ac07c
			summarizeBy: none
			sourceColumn: Deferral Code

			annotation SummarizationSetBy = Automatic

		column 'Variant Code'
			dataType: string
			lineageTag: 1f54fe08-2132-4569-9420-090915d28d9f
			summarizeBy: none
			sourceColumn: Variant Code

			annotation SummarizationSetBy = Automatic

		column 'Bin Code'
			dataType: string
			lineageTag: 4fdb1d9b-7f97-4866-9728-a7bcf2465493
			summarizeBy: none
			sourceColumn: Bin Code

			annotation SummarizationSetBy = Automatic

		column 'Qty_ per Unit of Measure'
			dataType: double
			lineageTag: fa28e745-c1d1-4b56-ae67-4c999e5c8239
			summarizeBy: sum
			sourceColumn: Qty_ per Unit of Measure

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Unit of Measure Code'
			dataType: string
			lineageTag: 8fb13130-eda4-43fe-9992-94d69fa1aaa6
			summarizeBy: none
			sourceColumn: Unit of Measure Code

			annotation SummarizationSetBy = Automatic

		column 'Quantity (Base)'
			dataType: double
			lineageTag: 53282c88-0cfc-40f1-8010-749094a5bd93
			summarizeBy: sum
			sourceColumn: Quantity (Base)

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'FA Posting Date'
			dataType: dateTime
			formatString: General Date
			lineageTag: 5fd88b64-bd4c-49eb-917a-5a3cf2abb169
			summarizeBy: none
			sourceColumn: FA Posting Date

			variation Variation
				isDefault
				relationship: a9e5e287-26fa-415a-b437-f7e38962899d
				defaultHierarchy: LocalDateTable_f74b2f7e-20f8-41aa-8bc8-544d7884d0a7.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column 'Depreciation Book Code'
			dataType: string
			lineageTag: 7486d8ac-7bed-4401-b7b9-3ffe1618900f
			summarizeBy: none
			sourceColumn: Depreciation Book Code

			annotation SummarizationSetBy = Automatic

		column 'Depr_ until FA Posting Date'
			dataType: int64
			formatString: 0
			lineageTag: 407674f3-b548-4a13-a779-262ae7e73e99
			summarizeBy: sum
			sourceColumn: Depr_ until FA Posting Date

			annotation SummarizationSetBy = Automatic

		column 'Duplicate in Depreciation Book'
			dataType: string
			lineageTag: d1478d82-d32b-4377-aa7b-020be305fb9c
			summarizeBy: none
			sourceColumn: Duplicate in Depreciation Book

			annotation SummarizationSetBy = Automatic

		column 'Use Duplication List'
			dataType: int64
			formatString: 0
			lineageTag: 5e4482b3-e4fa-43fe-9e66-46265d1baff4
			summarizeBy: sum
			sourceColumn: Use Duplication List

			annotation SummarizationSetBy = Automatic

		column 'Responsibility Center'
			dataType: string
			lineageTag: f25c8c7a-45ba-44f8-b4af-862e79b18c4d
			summarizeBy: none
			sourceColumn: Responsibility Center

			annotation SummarizationSetBy = Automatic

		column 'Cross-Reference No_'
			dataType: string
			lineageTag: 049c493e-2f72-4f82-a873-3e44615fb13a
			summarizeBy: none
			sourceColumn: Cross-Reference No_

			annotation SummarizationSetBy = Automatic

		column 'Unit of Measure (Cross Ref_)'
			dataType: string
			lineageTag: 34677e55-c92b-48b3-8580-476c0960784f
			summarizeBy: none
			sourceColumn: Unit of Measure (Cross Ref_)

			annotation SummarizationSetBy = Automatic

		column 'Cross-Reference Type'
			dataType: int64
			formatString: 0
			lineageTag: d2ad1640-5668-4539-89e7-936caf6790f7
			summarizeBy: sum
			sourceColumn: Cross-Reference Type

			annotation SummarizationSetBy = Automatic

		column 'Cross-Reference Type No_'
			dataType: string
			lineageTag: f9d6b925-d266-4480-b70e-16be923a7bc6
			summarizeBy: none
			sourceColumn: Cross-Reference Type No_

			annotation SummarizationSetBy = Automatic

		column 'Item Category Code'
			dataType: string
			lineageTag: ba0393f1-ea52-4390-b449-a3587e2b66e1
			summarizeBy: none
			sourceColumn: Item Category Code

			annotation SummarizationSetBy = Automatic

		column Nonstock
			dataType: int64
			formatString: 0
			lineageTag: b2ed4c9b-1df3-473b-8cc4-236942064e02
			summarizeBy: sum
			sourceColumn: Nonstock

			annotation SummarizationSetBy = Automatic

		column 'Purchasing Code'
			dataType: string
			lineageTag: dbbd91be-0008-4a6f-bf93-3b72b46a2c2a
			summarizeBy: none
			sourceColumn: Purchasing Code

			annotation SummarizationSetBy = Automatic

		column 'Product Group Code'
			dataType: string
			lineageTag: fe5c57e8-20fe-40a3-98db-b23b8a92c836
			summarizeBy: none
			sourceColumn: Product Group Code

			annotation SummarizationSetBy = Automatic

		column 'Appl_-from Item Entry'
			dataType: int64
			formatString: 0
			lineageTag: cbeaee33-ba0a-4332-8b3a-1a07d02bdbd6
			summarizeBy: sum
			sourceColumn: Appl_-from Item Entry

			annotation SummarizationSetBy = Automatic

		column 'Return Receipt No_'
			dataType: string
			lineageTag: bab44ec9-1e37-45ef-b63d-8b1def70c1d6
			summarizeBy: none
			sourceColumn: Return Receipt No_

			annotation SummarizationSetBy = Automatic

		column 'Return Receipt Line No_'
			dataType: int64
			formatString: 0
			lineageTag: 6331f212-9850-4932-b4e6-f7e1efbfac70
			summarizeBy: sum
			sourceColumn: Return Receipt Line No_

			annotation SummarizationSetBy = Automatic

		column 'Return Reason Code'
			dataType: string
			lineageTag: 6fc1cc55-8638-4957-a790-41b93a64cfc1
			summarizeBy: none
			sourceColumn: Return Reason Code

			annotation SummarizationSetBy = Automatic

		column 'Allow Line Disc_'
			dataType: int64
			formatString: 0
			lineageTag: ee449b05-d0d6-4edd-b1bb-0ec9af46052e
			summarizeBy: sum
			sourceColumn: Allow Line Disc_

			annotation SummarizationSetBy = Automatic

		column 'Customer Disc_ Group'
			dataType: string
			lineageTag: 156f7863-b978-46e3-8c56-7567161366db
			summarizeBy: none
			sourceColumn: Customer Disc_ Group

			annotation SummarizationSetBy = Automatic

		column 'Package Tracking No_'
			dataType: string
			lineageTag: 19475bfd-715d-4e98-83a4-d7cb94a4497c
			summarizeBy: none
			sourceColumn: Package Tracking No_

			annotation SummarizationSetBy = Automatic

		column 'TINX Web Order Line Product ID'
			dataType: int64
			formatString: 0
			lineageTag: c905935b-2a25-4c30-b8a5-19eec3f63a69
			summarizeBy: count
			sourceColumn: TINX Web Order Line Product ID

			annotation SummarizationSetBy = Automatic

		column 'Sales Credit Memo Header.Posting Date'
			dataType: dateTime
			formatString: mm/dd/yyyy
			lineageTag: e325a701-8ec4-420e-b39b-5fa23ead3e12
			summarizeBy: none
			sourceColumn: Sales Credit Memo Header.Posting Date

			variation Variation
				isDefault
				relationship: eb48a3cd-f6c5-4759-8870-eda1c37ad538
				defaultHierarchy: LocalDateTable_ad397994-9078-40e0-9fba-3abcfa7fa3b6.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column 'Sales Credit Memo Header.External Document No_'
			dataType: string
			lineageTag: 744a9cdf-3a63-44fa-93ea-0ba0aa553e8d
			summarizeBy: none
			sourceColumn: Sales Credit Memo Header.External Document No_

			annotation SummarizationSetBy = Automatic

		column 'Item.ASIN'
			dataType: string
			lineageTag: 62b155f3-dbb8-40c8-8642-ff5a5d32022b
			summarizeBy: none
			sourceColumn: Item.ASIN

			annotation SummarizationSetBy = Automatic

		column 'TSO Returns' = CALCULATE(SUM('Amazon Cost Analysis - TSO'[product_sales]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[ASIN]='Sales Credit Memo Line'[Item.ASIN]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[order_id]='Sales Credit Memo Line'[Sales Credit Memo Header.External Document No_]),FILTER('Amazon Cost Analysis - TSO','Amazon Cost Analysis - TSO'[type]="Refund"))
			lineageTag: 82fda3a1-a58a-4213-9a09-be049e5eda31
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Adjusted QTY for Bulk' = ```
				
				VAR UOM_BULK = LOOKUPVALUE('Item Unit of Measure'[Qty_ per Unit of Measure],'Item Unit of Measure'[Item No_],'Sales Credit Memo Line'[No_],'Item Unit of Measure'[Code],"Inner Pack")
				VAR IS_BULK = LOOKUPVALUE('Item Card'[Bulk Item],'Item Card'[No.],'Sales Credit Memo Line'[No_])
				
				RETURN 
				IF(
				    IS_BULK=TRUE,
				    IF(OR(UOM_BULK<>0,UOM_BULK<>BLANK()),ROUND('Sales Credit Memo Line'[Quantity]/UOM_BULK,0),'Sales Credit Memo Line'[Quantity]),
				    'Sales Credit Memo Line'[Quantity]
				)
				```
			lineageTag: b750cc2c-35ab-4e9c-924e-1f1dc28a6c3f
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 'Total Cost' = 'Sales Credit Memo Line'[Adjusted QTY for Bulk]*'Sales Credit Memo Line'[Unit Cost]
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 6e5825ef-3c9c-4c6f-a51d-13b1123c78bf
			summarizeBy: sum

			annotation SummarizationSetBy = Automatic

		partition 'Sales Credit Memo Line' = m
			mode: import
			source =
					let
					    Source = Sql.Databases("rssql01"),
					    RSUAT140 = Source{[Name="RSUAT140"]}[Data],
					    #"dbo_RevolutionSupply$Sales Cr_Memo Line" = RSUAT140{[Schema="dbo",Item="RevolutionSupply$Sales Cr_Memo Line"]}[Data],
					    #"Filtered Rows" = Table.SelectRows(#"dbo_RevolutionSupply$Sales Cr_Memo Line", each ([#"Sell-to Customer No_"] = "10160")),
					    #"Changed Type1" = Table.TransformColumnTypes(#"Filtered Rows",{{"Posting Date", type date}}),
					    #"Filtered Rows1" = Table.SelectRows(#"Changed Type1", each Date.IsInPreviousNMonths([Posting Date], 3) or Date.IsInCurrentMonth([Posting Date])),
					    #"Merged Queries" = Table.NestedJoin(#"Filtered Rows1", {"Document No_"}, #"Sales Credit Memo Header", {"No_"}, "Sales Credit Memo Header", JoinKind.LeftOuter),
					    #"Expanded Sales Credit Memo Header" = Table.ExpandTableColumn(#"Merged Queries", "Sales Credit Memo Header", {"Posting Date", "External Document No_"}, {"Sales Credit Memo Header.Posting Date", "Sales Credit Memo Header.External Document No_"}),
					    #"Changed Type" = Table.TransformColumnTypes(#"Expanded Sales Credit Memo Header",{{"Sales Credit Memo Header.Posting Date", type date}, {"Posting Date", type date}}),
					    #"Merged Queries1" = Table.NestedJoin(#"Changed Type", {"No_"}, Item, {"No_"}, "Item", JoinKind.LeftOuter),
					    #"Expanded Item" = Table.ExpandTableColumn(#"Merged Queries1", "Item", {"ASIN"}, {"Item.ASIN"})
					in
					    #"Expanded Item"

		annotation PBI_ResultType = Table
```
