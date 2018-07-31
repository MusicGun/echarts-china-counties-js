(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('上蔡县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411722","properties":{"name":"上蔡县","cp":[114.264381,33.262439],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@Q@G@MB@B@@D@@D@@@@A@@BA@@B@BC@@BEB@@O@C@@EM@@A@@CBE@AAA@CAA@C@ABCBCB@@ABADA@AB@@A@A@@CCB@AA@@AA@@CAEA@@D@@GBAB@B@FB@BHCDE@AB@@@D@@E@A@A@@BE@AG@ABA@A@@@A@@C@AAEAA@AC@AE@@B@@BPAH@@E@@AC@@@@DA@A@@B@@C@A@@JA@DB@@@B@B@BA@E@@CC@O@@C@@A@GH@A@AC@A@@@A@@D@BB@@@@@@BABED@@A@C@MAA@A@@D@B@BAAA@A@BAIEEC@@BGAAI@A@@GA@C@BGC@@@A@@AA@BEE@@GG@@@C@AACF@@GAC@@AA@C@G@@@@EC@@@@C@@EAK@C@CBC@GBA@A@AAA@@@A@E@A@AAAAA@@@E@@EC@@@AA@@E@@@BGC@E@@BA@C@E@@@@BI@@EC@A@@CBI@A@@E@@A@@I@@FAD@DE@A@@BAB@@A@E@A@@B@F@@EBM@@@@B@F@@@@@BA@C@AAG@@@CAA@@B@@@@@@@B@B@@A@C@@@C@C@AAM@@@@A@AE@@@@A@@A@G@@P@@E@_@IA@@A@@AC@A@@@AACC@AA@@AA@A@A@A@A@@@@A@@@E@@@AAA@A@@@ABA@ABEBC@C@C@C@A@CA@@@@AC@A@@@@@CFA@@BE@CB@@CACCCA@AC@C@C@C@A@@B@@@DAB@@@B@@@@@@@BD@B@@@@B@@@BD@@@@@@FDBBBB@@D@@B@@@@B@@A@@BABAA@@AB@@BDAH@@@@A@@@@@A@BB@BB@@@AD@@BB@@@@@B@BB@@B@@@@E@@@@@BFBDB@B@D@AD@@A@@@@D@@@@@@@B@@E@@@@@AHF@B@@@@ABB@AB@D@F@@BDB@@B@@B@@B@@B@D@@ABAB@@@B@@C@@@A@@B@@@BDF@B@@@@@@@@AB@D@@C@@BC@@@@@@DA@A@@C@@A@@@@D@@@@@@@BF@B@@D@F@@B@@DA@A@@N@B@@@B@@BB@D@@A@@B@@AB@@DLAB@@A@KBA@@@A@@A@A@@AAAC@@AIACAAAAA@ABA@A@@@ABA@@B@D@@@@C@A@@@A@@@BD@@@BA@BD@D@BB@@B@@@D@@A@@B@D@@C@EBA@C@C@EA@@A@@B@@@D@B@B@B@B@BH@@@CHC@@@A@CA@AA@A@@BC@@B@@AAEAA@A@CBC@@A@C@@A@M@@@@C@@@A@@G@A@A@A@ED@HEHA@ABEDA@@@E@A@BF@BC@@@ADD@ALLBCX@@D@@DJ@@@@H@@DB@@@B@BBBBD@@A@@FB@BB@BBH@@A@@BCB@@F@@@B@@BB@DJ@@D@@A@@@A@A@C@A@@H@B@B@@A@@B@BJ@BA@BD@@@D@B@@B@B@@@@@B@@@@B@B@B@@@B@BHCF@B@@@DDB@B@HAB@B@BDB@@@DB@AB@HCB@LA@@@@AB@BB@@@BB@BABDN@@@BB@CL@BADAB@@@B@@ADB@CDCLCLENG@@D@DD@@HD@BDH@B@@DBPAF@@AH@@BB@FLBBD@@DAJEDAD@F@F@RBHBFB@BF@@@ABADE@ABCDCD@BBBDBDB@BC@C@CBCDCDABA@IBG@AB@@DDBBFB@FAFBDJALBDDBDB@DBBBF@CDDBB@BB@@@B@DAB@BAB@BA@A@A@BBD@@B@B@BD@BB@@@@@B@@CB@@AB@@@B@D@D@B@@BB@@BBAHB@@BD@@AHB@CAA@AB@@BJ@CBLB@AB@@A@CBBTBBBF@@DB@BCB@@DD@H@@AB@@@B@A@L@@DB@@CB@B@@BB@BHCDF@@@ABABB@@B@@HA@BD@@BB@@AD@R@BB@@B@HFB@AB@@A@@DN@@BBBBADFFB@DB@@B@@F@@A@@B@@DB@@DB@@C@@@DB@@CB@@D@@@@@BJ@@D@BD@@BD@@@C@@BD@@@@BD@@@F@@@F@A@C@@AD@@CB@@DB@@AB@@@B@@@@AD@@AD@@@B@@E@@D@@A@@@@D@AEB@BDA@@BFA@AB@@BD@AA@@F@@@@AE@@@F@AAA@@AB@@AA@@AB@@CD@B@BD@@@EB@@CD@@BD@@BB@@GDB@@BB@@@@@@@A@@B@B@@A@A@@@@@@@DB@@@@@@@B@@BD@@AF@B@@CB@@@@@B@@CB@@GA@AB@@@A@@@@A@@GA@@@@@@C@@@C@AD@AFD@@E@@DA@FA@@F@@@BBAF@B@@DD@@BD@@BB@@AF@@CB@@DD@@AB@@DD@@G@@@AA@@CC@@CB@@AD@@CA@@AB@D@@JA@@FB@@BF@B@@B@CH@@DL@@BH@@D@A@@@@DA@@@BBB@@B@B@BAB@LB@A@@@@@HB@@@@BB@@BF@@AB@B@BB@@B@B@B@B@B@@@@A@@D@D@@A@@@AF@@@@BB@@CB@@B@@@CB@@DB@@AB@@@@CB@@B@@@DB@@CF@@AB@@B@BA@@BH@B@@H@@@CD@@@A@@DNBB@B@@@@C@A@@@@@@J@@ED@@FB@@CB@@DB@@ED@@@B@@C@@@AD@@A@CA@@BC@@E@@@CA@@A@@B@AKB@ACH@@CB@@@@@@E@@HA@A@@@J@@@D@@@BDB@AB@@@@B@@@@D@@B@@B@@C@@@FF@@AB@@B@@@DB@@C@@B@@CB@@DB@@BD@@AF@@DB@@CB@@CD@@@EA@@A@@@D@@AD@@C@AAW@@@CA@@E@A@@@@CB@@@E@@@C@AH@@@@@CBA@H@@BF@@BA@@BB@@AD@@BLBB@F@N@P@@@@CF@B@D@@ABBL@@PDB@BD@B@BAB@DAF@B@B@B@B@@@B@@@@@AD@@B@B@J@@@D@@@DCB@D@B@@AAIB@@C@AFBB@@@B@@BL@@A@C@@BA@@@A@A@@FA@AAA@@AGA@@@A@@GA@@A@@@@A@@CC@@CB@@@D@@ABA@AB@@@@A@A@AD@@A@@@AAGA@@AC@@A@@@CA@AAD@@AB@@C@@HABDD@@@B@@@D@@AB@AA@EA@@A@A@@@CB@@E@AB@@AB@@B@@@AD@@@C@@AD@@G@@B@@BB@@C@@BD@@@DH@@@@@B@@@FA@@B@@AD@@@@@@C@@@AA@@A@@@@B@B@@@@@@BF@@B@@@AF@B@@E@CBB@A@@@ABAB@@BB@@ADA@@B@F@@@@I@AF@@AB@@CB@@@F@B@H@@@B@@BB@@FF@B@@BD@@DB@@FB@J@@BB@@D@@HB@B@@DB@A@AD@@B@@@AB@BMB@D@@AD@@@@AD@BCF@@@F_@@C@@E@@@@@AB@@@A@@AB@@@A@@@D@AAA@@A@CC@@CA@@CA@@CA@@A@@@A@AB@@BB@B@@AB@@@C@@@A@@AD@@@C@@@D@@@D@@@@AB@@@D@@DD@@D@@@F@@@@BB@@@BD@B@@@BALB@@@E@O@EB@DA@CC@@A@@@@@@@@@AF@@AF@@CB@@DF@@AB@@AA@@@@AD@@@@@D@@DBBJ@@FRB@@I@@@JBBE@@@FB@B@@A@@@@@DB@@EB@AFB@@GB@@@A@@AH@@@CEH@B@@@B@@@@C@@B@B@@@@@@@@ABA@@BAAA@@@A@ABE@@BA@C@AA@@BE@@AC@@BA@@C@@@BC@@@@@@C@@@A@AB@@DB@@C@BBA@C@C@A@ABGD@BAA@@CD@@@BA@C@A@@@AA@@@@E@ABB@C@@@A@@@@@C@@@BA@@C@@A@@AA@@B@BCA@@@BC@@@@C@@@AA@@AB@@MBA@CD@@AD@@AA@@CC@@BA@@@C@@@@EE@@A@ABAE@@@@AF@@AC@A@@@@A@A@ABA@A@A@@@C@A@@F@@AC@@@@GC@@A@@AFA@BCA@@DC@BEAAAF@@BG@@CH@@BEA@ADA@BCA@@DEACA@@CAA@@@@AGEB@BA@AA@G@@C@@FAD@@AB@@C@CA@AACA@A@@A@A@@A@@@AA@@AC@AADA@CABA@AEA@BAA@ACA@@AA@@AA@ACCB@EE@@AA@@@CAACA@GB@D@@G@A@@CB@@A@AE@@@A@AACBG@A@@AA@E@G@A@AA@@CA@@@C@AEBABA@Q@C@@L@@AB@@AABI@@@ACACBA@@D@BA@E@ABM@A@@C@@AAC@A@A@AAIAC@A@GDA@@@@@AA@@A@@@@@AA@@I@E@@@EBA@@@AAA@AAA@@@CAE@@C@A@@C@@@@@A@A@AB@@E@@AAG@A@@@@C@I@EA@AAA@A@A@@A@AAEAC@CAC@G@"],"encodeOffsets":[[117282,33945]]}}],"UTF8Encoding":true});}));