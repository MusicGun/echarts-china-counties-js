(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宾县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230125","properties":{"name":"宾县","cp":[127.466634,45.745917],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@ACA@@AA@A@@@@AA@@AA@@A@@@@@@@@@AA@@@@@@A@@@@@@@AB@@@@A@@B@@@BA@@@@@@B@@A@@@@B@@@@@B@@A@@B@@@@@B@@@@@B@@@@@BA@@@@@@B@@@B@@@@AB@@@@@@@@A@@BA@@@@@@B@@AB@@@@A@@B@@A@@B@@@B@@@BA@@@@@@B@@@BAB@@@@@@@@A@@@@@@@A@@BA@@@@@A@@@@@AA@@@AA@AA@@A@@@AAA@@A@@A@@A@@@@@A@A@@@A@AB@@ABA@ABC@@@ABA@@@A@AA@@@@A@@@AA@@@@AA@@@A@@A@@@AA@@A@@@@AA@@@AA@@@@A@@@A@A@@@@@A@A@@AA@A@A@@@@AA@@@AA@@@@@@@A@@BAB@@@@AB@@A@@@@@A@@AA@@@AAA@A@@@A@A@@@A@@@A@@B@@AB@@@@@@AA@@A@@@@@A@@@A@@BA@@@A@@@A@A@@A@@@A@@@@@@A@@@@@A@@@A@@B@@@BA@@@@@@@A@@@@@A@@@@AA@@@@A@@@@@@@@A@@B@B@B@B@B@@@BA@@DA@A@@@AB@@@BA@@B@@@B@@@@@B@@@@A@@BA@@BA@@A@@A@@@@@@@A@@@A@@@A@@@A@@@@@A@@@@@@@@@A@@@@A@@@@@A@A@@@A@@@@@A@@@A@@AA@@@AA@A@@@@A@@A@@@A@@AA@@A@@ABA@ABABA@@BA@A@A@A@AA@A@A@A@A@A@C@A@@@ABA@A@@A@@@A@A@AAA@@A@@@A@@@C@AB@@@@A@AB@@C@@AA@A@AAA@A@@@A@A@@@A@@@@@A@@A@@AA@@A@A@@@@@A@@@ABAB@B@@A@@@AAA@@@@AA@A@@@C@A@@A@@@@AA@A@@@AB@@A@A@@@A@@@@@A@@@@@@@@@@@@@@@@B@@@BA@@@@@@B@@@@@@@@@@A@@@@AA@@@@BA@@@@AA@@B@@@@@B@@@B@BA@A@@@A@A@A@@@AB@@A@@@AB@@@BAB@BAB@D@BAB@B@BA@@BAFCBA@@@A@@@@A@AACA@AA@@@@@AA@@A@B@@A@@B@@A@AB@@@@@@@@A@A@AB@@ABA@@@@@AB@@@B@@@B@@@@@@@@A@@@@@@@@@@B@@@B@@@B@@A@@B@@@B@@@B@@@@@@A@@@A@@AA@@@A@A@@@@@A@@@@BA@@@@@@@@@@@@AAAA@A@@A@@@@A@A@@@@A@@AA@@A@@AA@@@A@A@@@AAA@A@@@A@@@@@A@@A@@@@AA@@@AAA@@A@@A@@A@@@@@@AAA@@@@ACA@@AA@@@@@@A@@@@@@@A@@@@BA@@BA@@@A@A@@BA@@@C@@@AA@@A@@@@@@@A@@@A@C@A@@@AAA@@@@@@@A@@@AB@@A@@BA@AB@@A@@BAB@@@@A@A@@B@@AAA@@@@BA@A@@@AB@@A@@@@@A@@@AB@@@@@@AB@@@@@@@@AB@@@@A@@@A@@@A@@@@@@B@@@@@@@BA@@@@@@@A@A@@@A@@@@B@@@@@@@B@@@@A@@@@BC@@@ABA@A@@@A@@@C@A@@@@@@@@@A@@BA@@@AB@@ABA@@BA@A@A@@@CAA@@@AAA@@@@A@A@@@@AA@AA@AAA@AAA@@A@@BA@@@@@@@A@@@@A@@@@@@@A@@@@AA@@@@@A@@@AB@@A@@@@@@@@BA@@@A@@@@@A@@B@@@@@@@B@@@@@@ABA@A@@BAB@@A@@@A@@@A@A@@@@@@@@@C@@@@@A@AB@@@@A@A@AB@@@@A@@@@AA@@@@@A@A@@@A@@@@@ABA@A@AB@@@@A@@@@@@AA@@@@@A@AB@@@@A@@AA@A@AA@@@@AAA@@@AA@@A@A@@@@@AB@@A@@@@@C@@@A@AA@@A@AAA@A@@@@BA@@@@@@@ABA@AB@@@@A@@@A@@A@@A@@@A@@@A@C@@@CB@@A@A@A@@@@@A@@@@@AB@@@@@@A@@@ABA@A@@@@@@BA@@B@@@B@@@@A@@@@@A@@@@@A@@B@@AB@BA@AB@B@@@@AB@@@@AB@@AB@@A@A@@BA@@@AB@@@@@@@@@BA@@@AB@@@@A@@@A@A@AAA@@@@@@@@@@@@A@@A@@@@@@@@@@@@AB@@A@@@@AA@@@@AA@@@@AAA@@@@@@@@A@@A@@AA@AA@@@@@@@AB@@A@@A@@A@@AA@@@A@@@@@@@@BA@@B@@A@A@@@A@@@A@@DC@AB@@A@A@@@@AAA@AAA@A@A@A@CAA@A@C@A@A@A@@@A@A@A@@@A@@@A@A@I@AAC@C@CAA@@@A@C@CBC@G@C@@@A@@A@CAA@AAC@AAA@AAAAA@@@AA@@ACAAAA@@AA@AA@@ACA@@@@@C@@@CAC@AAA@CAAAAAAAAAAA@@@A@@A@C@CAA@@@@@AACACAAA@@@@@B@@A@@@@BC@@@A@A@ABA@A@@B@@ABA@@BA@@@ABA@@@AB@AA@@@A@A@AAC@@@A@A@@@@AAA@AA@AA@@@@A@@@C@CBC@CBA@EBGBEBA@ABA@AAC@C@ABE@ABABC@C@A@ABA@A@E@A@A@@@@@A@A@ABC@A@@@@@A@A@@@A@C@A@AAA@C@C@C@C@C@A@@@A@@@A@@@@B@@A@A@@B@@@B@@A@@BAB@B@BCDCF@BABCD@BA@A@ABA@@@CBA@A@AAA@@@@@@@@@A@@@@@@@@@CB@@@@ABA@C@ABC@@@A@ABABABABC@EBCBA@A@C@@@A@ABA@A@A@CBA@@@@@A@@@CA@@A@@@@BA@@@@@ABCB@@ABA@@AA@AAAA@@@@A@@@@@@BA@@@A@ABA@@@A@@@A@A@@@CBC@@BA@A@A@AA@@A@@@AA@@AAAA@A@@A@@A@@BA@@@AA@@@@AB@@A@C@@AA@AAA@A@@@AB@BAB@@@@A@@A@@A@@@A@@A@A@@@@A@@@@@ADA@@@A@A@@@EAA@AA@@AA@@AA@A@AA@@A@@AA@@@@A@@CE@ACAACAA@AAAAAA@CBCDGD@@A@@BA@A@@@EDCB@@A@A@A@@BCBAB@@@B@B@@ABA@@@AB@@A@@@C@A@A@A@@@C@A@C@@@C@GDABA@@@A@GEGC@@@@DAFCDADA@A@@AAA@AAAA@A@A@@@ABABA@@@AA@CCA@AAA@AAA@@ACC@@@@A@A@A@A@CA@@@BA@ABCDCBABCFAB@@A@A@GCCAA@@@E@A@ABA@@B@@@BA@@BABA@@BAB@@AB@BA@@@@BA@@@@BA@@@@@A@@@A@A@AAA@A@@@AAA@@@C@A@@@A@A@A@@@A@A@A@A@@@C@A@A@A@A@AA@@A@A@A@@AA@AAA@@@AA@@A@@@AA@@A@@AA@@@@@A@@@A@@@A@A@@@C@@@A@@@A@@@AA@@A@@AC@@AA@@@AA@@A@A@@AA@A@A@A@A@@@@@A@AA@@A@@AA@@@AA@@A@@AA@@@A@@@A@@@A@A@A@A@A@A@A@@@A@A@ABA@A@A@@BA@A@ABA@A@AB@@A@@@A@AB@@A@@BA@@@AB@@AB@@@@AB@@@B@@@@@BA@@BA@@@A@@@ABA@@@A@ABA@A@@@@@A@A@A@AAA@A@@@A@A@AA@@@@AAAA@@@@A@@@A@ABA@A@@@A@A@@@A@@AA@@@@A@@@@@AA@@@@A@@@@@@B@@A@@@@@@@A@@A@@A@@@@AA@@A@@AA@@@@A@@@@@A@@@A@@@@@A@@@A@@AAB@@A@@A@@A@@A@@@@@AA@@@A@@@A@@B@@A@@@@@@AA@@A@@AA@@AA@AA@@@AA@@@AAA@A@@AA@AA@@A@A@AB@@A@@@A@AAA@@AA@AA@@A@A@C@A@C@EBA@EBABA@CBC@@@CB@@A@C@ABA@ABC@ABA@A@A@ABA@@@@BA@@BABCB@BA@@@A@C@C@AAC@A@A@A@@BA@@@A@A@@BA@@@AB@BA@ABA@ABABA@ABA@A@A@A@E@EA@BA@A@A@@BAB@@AB@@ABCB@@A@@@A@A@AAA@A@E@C@A@C@AAC@EAA@A@@@ABA@@@@B@B@@ABABA@CBABABC@ABA@ABABABABAB@@C@@@@@CACAA@CAA@@@A@@@A@@@A@A@A@ABAAA@C@@@A@A@@@A@A@ABA@A@A@C@ABC@A@ABA@A@@BCBADAB@@AB@@@@@B@@AB@@AB@@@B@@B@@B@B@B@BBB@B@BA@@BAB@@AB@@@@A@A@ABA@@@ABA@@@ABA@@@A@@@@B@BB@@BA@@B@@BB@B@B@@AB@@AB@@B@@B@@@B@@@B@@@B@@A@A@A@@@AB@@@@@BAB@@@B@@@BB@@@@B@@@@@@@@@@A@A@A@A@@@ABA@@@@B@@AB@B@BBB@B@@@@@B@B@@@B@@@@@@A@A@@@A@AAA@A@@@A@@@CBA@ABA@ABA@A@ABA@@@@@ABA@ABA@@@@B@@A@AA@@A@A@@@@@@@A@AA@@@B@B@@@@@BA@AB@@A@A@A@@@A@A@A@A@A@A@@@CAA@A@A@@@A@A@@@@@CA@A@@A@@@A@@@@AA@ABA@@@@@@@AA@@@@@@@A@@AAAAAAA@@@@@AA@@AAA@@@@@A@@@A@A@@@A@@@A@@A@@@@AA@@@@@@@@ABA@@@A@@@A@A@A@@A@@A@@@@@AA@@A@A@A@@@A@@AA@@@A@A@A@C@CBA@A@@@@B@@@B@@@BA@@B@BA@@@@B@@A@@@AB@@AB@@@@@@@B@BA@@B@@AB@@@B@B@@@B@@@BA@@BAB@@@B@@AB@B@@ABA@@BA@AB@@A@ADAB@@AB@@@B@BA@AB@@@BA@@BAB@@ABA@A@A@AB@B@@@BA@@BBBA@@BA@A@@B@B@@@B@@@BAD@@AB@@A@@BA@A@@@A@AB@@@B@@@BA@@@AB@@@@A@@B@@ABA@@BA@@B@@@@@@BB@@@@@@@B@@@@@@@@@B@@@@@B@@AB@@@@@BA@@@@B@@AB@@@@A@@B@@@@@B@@@@A@BB@@A@AB@@@@CBA@@BA@A@@BA@@@ABA@A@@B@@AB@B@BA@@@@B@@@B@@A@AB@@@BB@@BAB@BABAB@@@B@B@@@B@B@@AF@B@@@@AB@@ABB@@B@B@B@B@@@B@@@BABABAB@BAB@@@@AB@@@@@B@@@D@@B@AD@@@B@@@BA@A@@@@@@B@@@BB@A@@@AB@@@@@B@@@@AB@@@B@@BB@BA@AB@@@B@@@@AB@@@@B@@@@@@@AB@B@@B@@@AB@@@@@B@@@@A@@BA@@B@@@BA@@BA@@B@BA@@@BBBD@BA@@@AB@@@B@@AB@@DD@@BB@@A@@@@B@D@@@@@B@@@@B@AB@@B@@@@B@@@@BBA@@@@@@BA@@B@B@@@B@D@@@@@B@B@@@BA@@B@B@@@B@@@@A@A@@BD@@B@@@B@@CB@@A@@AAA@@AB@@@B@@@B@B@BB@@B@@A@A@A@@@@B@@@@B@B@@B@@A@@@A@@BB@@B@@A@A@@@@@B@BB@@@@A@CBA@A@@@@@BB@@@@@@@@AB@@B@@B@@@@@BB@B@@BA@@BB@@@BA@B@@AB@@@@B@@B@B@B@@BB@@@BA@@@A@A@@AA@A@ABABAD@@@@@@B@B@@@@@@BA@A@@@@B@@@BA@A@C@C@A@@@@B@@@BBB@@@BA@@@A@A@@@ABA@A@AA@@A@@@@@A@@@@@A@@A@@A@@@A@@@@@@@A@@@A@@@@@AB@@@@A@@@A@@@AB@@@BA@@BABCB@@@@@B@@ABA@@B@B@@BBDB@@ABA@@@@B@D@@B@@BA@@B@@@BB@B@@@B@B@@@@B@@@B@B@@@B@D@@@B@@B@@@@BA@A@@BAAA@@B@@AB@@ABA@A@@@@B@@DF@@C@ABA@A@@B@@@@@BA@@B@@B@@@ABA@@@AB@A@@A@@B@@AB@@AA@@AAAACBA@ABA@@@@B@BABABA@A@@@@BBB@@@BABA@A@@@A@@B@@ABA@A@@B@@BB@BA@AB@@BBB@@B@@C@A@A@A@E@A@@B@B@BA@AB@@ED@BA@A@CAAAA@@B@@@B@B@@AB@@C@AB@@@BA@@@A@C@@@A@@@@@@BBF@@ABA@CA@@AB@@@@@BDB@@@B@@C@AB@@@@FB@B@@@B@BE@@@A@@B@BBBBB@B@@@BA@EAABA@@BA@@@BB@@BBA@@BA@C@A@@@@@AB@BAB@@@@BB@BB@@BA@@BC@@B@@ABABA@A@ABA@A@C@@@A@@B@B@BBBA@A@A@A@A@@@@@AB@B@@AB@@AD@B@BA@A@A@AB@@A@@B@@BBA@@@ABEH@BA@@@A@@A@A@AA@@@AB@@@@BBA@@@CB@@@@@@@BBBAB@@@@@BB@@B@@A@@BABABCBAB@BC@ABAB@BABBB@@CF@@@BB@@@ABCBAB@@@@A@A@@B@@ABA@@B@@AB@@@BABA@@B@@@B@@@B@@@BA@@@AB@@ABA@@@ABB@@@BB@@@BA@@B@BAB@@@BB@AB@@@BABA@@@@@BB@@@@A@A@@@@@@@@BA@@@A@@@A@@@@@CB@BB@B@@@@@A@A@@@A@@@@@@@@B@@@@AA@@A@EB@BA@A@@BB@@@@BCD@@A@@@@@A@ABA@@@@BAB@@@@BB@@AB@@B@@B@@A@@@BBB@@@BB@@@@ABA@@@@@@B@@ABC@ABCBA@@BB@AB@@@AA@@@@@@B@@BB@@@@CB@@@@@B@@@BA@@@@@@@@B@@A@@@@@@B@@B@@@B@@@@D@B@@A@AAA@@BB@@B@@A@A@@@@AAB@@@BAB@@@@@B@@@@@BB@D@@@@B@B@B@@A@CD@@@@@@AB@@A@AAA@A@A@@@AB@AA@A@@B@B@@@@@B@@@BA@@@A@@BC@@@@H@DBDBDBFBHBFF@B@JDDBF@HALADAB@B@LBNDLB@@\\BXBD@JBNFD@DBF@HBLANAJAJCD@HCVGVGHAPEHCREDCDCFGJILEHEHERCJAPAVEfE`CLAF@F@PFXHJBPD@@FBJBFAB@F@NEJAZIPE@ALAHCHAJCL@J@`CFANERCRIDA@CBGAE@M@KEAA@A@AAAAAC@AAE@A@GDCAC@CFKDCHAJ@HBPJFDJLNFFBF@HAJAV@N@FAH@FALCLCH@H@LDPFLFHBD@HBVFJD@@B@@@B@D@JBJBFB@@HDHFHFBBDFFJBLDL@@@FBFDHHFB@HBJBLDDBBDBD@FAD@DCBABEDGDIDABA@@@@B@BADAJD@JDJDTDD@D@HANAP@DBD@@DBF@BC@C@CBQBC@CBABAB@BAB@BBB@BBBDDDAJADBBCBABADAB@D@DBB@B@BA@@BC@AB@D@BADABA@AAAAAECAA@A@@@A@AB@DAF@H@FAB@DALAJAD@FAF@F@F@F@B@B@BAB@B@BAB@B@B@DBBBD@BBHFFBFBFD@@DBD@F@D@FCPIDCHGBAFMDG@KAOCI@O@ABCDGBCFEFCB@FCFAF@J@N@JBHD@@RDBBBDHDHFFHFDHBBBD@D@B@D@FAF@HEDABEAC@ACCAAACACACECCECC@AAC@A@A@A@A@@BADCBAFADAD@H@B@H@F@F@H@F@D@D@B@FAF@DAD@D@HAB@JAHAD@LBNBLBT@bDLDHBHBH@D@HAH@HAFALCLCFADAFAD@B@JAD@D@LANCD@REB@J@J@H@HDFDFDFJJX@@FDLDB@D@D@B@B@RCRERAVCJANEJELIFEDCPIHENEHCH@L@P@LBRFB@BBHBFDFBFFDBFBHDDDD@DBDBFBF@D@DBD@D@F@FBB@D@D@BBFBD@DBF@D@F@B@F@D@D@RALBJBLDLFHDFHHPBBB@@@DDBBDDFD@@DB@A@A@@@A@@B@@C@A@@@@@@B@@AB@@A@@B@@AB@@@DAB@@@B@@A@@BC@A@@@@@A@@@A@@@@B@@A@@@@B@@AB@@C@@BC@A@AAA@AACACAA@A@@@A@@@@BA@@B@@A@@@@@@AAC@AAA@@A@@@@@A@A@A@@@@BA@@BA@@@@@A@A@@B@@AB@@@B@@@@@DAFADABAB@@@B@@@B@@@B@B@D@D@D@F@DAF@FAB@B@B@@@B@BB@@@@@@@@@@@@@@B@BA@@@@BA@@B@BCBABA@@@@A@@A@A@@A@AAA@AAA@@@@A@@@A@@@@BA@A@@AAACA@@A@@@CAA@A@A@C@@@AA@@AA@@@AAAA@@@@@@@@BC@ABC@A@ABA@@@@BABA@@@@@@AAA@@AA@A@@A@@@A@A@@BA@@@ABA@A@A@A@@@@@AAAA@@AACA@@AA@@@@@@@AB@@AB@@AB@@A@@@AB@@A@@@A@AAA@@@C@A@A@A@@@A@A@A@A@@BA@@BA@@@CBCBA@A@C@@@ABA@A@@@@@A@AA@@@@@A@@@@BA@AB@@@@AB@@A@A@@@@@AAA@@AA@A@@@ABA@ABA@@@A@A@A@@@A@AB@@@@A@@@AAA@AA@@A@@@A@@@@BA@@@A@@@A@@@A@AACAA@A@@A@E@A@CA@@AAA@AAAA@A@@@C@ABCBABAB@B@DADB@@BA@@@@BAAC@C@A@@@AAA@@@A@C@A@A@C@AAA@@@@AA@CAA@@AA@@@@A@@@@@@AA@@@A@@@A@@@A@@@ABAB@BA@ABA@A@@@A@@@A@A@@@@@AA@@@A@@AA@@@@@A@@@C@A@@BA@@BABA@@@@B@@@@@@@@@@AA@@@BA@@@@@@@A@AAA@A@@@@@A@@A@@@@AA@@@@@AC@@@@AAB@@@@@@A@@A@@A@@@@A@@AA@@@A@@@@A@A@@@A@@@@@AA@@@@@@A@@@A@@BA@AB@@@@@@@@A@@@A@@@A@@@A@@@@A@@@AA@@AAA@@@A@@@AB@@@@@C@AAA@A@AAA@@CAA@AAA@@BA@@@A@@@ABA@A@A@A@@@A@@@@ABA@@"],"encodeOffsets":[[131318,46852]]}}],"UTF8Encoding":true});}));